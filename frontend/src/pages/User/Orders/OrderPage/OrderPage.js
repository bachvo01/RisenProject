import React, { useState, useEffect, useContext } from 'react'
import './orderPage.scss'
import Separator from '../../../../components/Separator/Separator'
import { useNavigate } from 'react-router-dom'
import {MdOutlineArrowBack} from 'react-icons/md'
import {BsCheckCircleFill} from 'react-icons/bs'
import {RiSteamFill} from 'react-icons/ri'
import Headings from '../../../../components/ProductList/ProductPages/Headings/Headings'
import { CartContext } from '../../../../Context/CartContext'
function OrderPage(props) {
    const navigate = useNavigate()
    const handleBack = () => { navigate(-1) }
    const [items, setItems] = useState([])
    const [details, setDetails] = useState([])
    const { URL } = useContext(CartContext)
    const url = window.location.href
    const extractedURL = url.split('/')[4]
    useEffect(() => {   
        const getItems = async () => {
            const token = localStorage.getItem("accessUserToken")
            const body = { orderID : extractedURL}
            const response = await fetch(`${URL}/get/orders/details`,{
                method: "POST",
                headers: {"Content-type" : "application/json", "Authorization" : "Bearer " + token},
                body: JSON.stringify(body)
            })
            .then((res) => res.json())
            .then((data) => setItems(data))
        }
  
        const getDetails = async () => {
            const token = localStorage.getItem("accessUserToken")
            const body = { orderID : extractedURL}
            const response = await fetch(`${URL}/get/order/id`,{
                method: "POST",
                headers: {"Content-type" : "application/json", "Authorization" : "Bearer " + token},
                body: JSON.stringify(body)
            })
            .then((res) => res.json())
            .then((data) => setDetails(data))
            .then(() => console.log(details))
        }

        const getCodeOrder = async () => {
            const token = localStorage.getItem("accessUserToken")
            const response = await fetch(`${URL}/get/order/activate`,{
                method: "POST",
                headers: {"Content-type" : "application/json", "Authorization" : "Bearer " + token}
            })
            .then((res) => res.json())
            .then((data) => {
                setDetails(data[0])
                setItems(data[1])
            })
        }

        if(extractedURL !== 'activate' && props.context === undefined){
            getItems()
            getDetails()
        }
        else{
            getCodeOrder()
        }
    },[])
    console.log()

    const dayCovertion = (date) => {
        const getDate = new Date(date)
        return getDate.toLocaleString("en-GB" , {
            year : "numeric",
            day : "2-digit",
            month : "2-digit",
            hour : "2-digit",
            minute : "2-digit"
        })
    }

    console.log(details)
  return (
    <div className='order-page-container'>
        {
            props.context !== 'code' ? <Separator></Separator> : <Separator status = '1'></Separator>
        }
        {
            props.context !== 'code' ? <Separator></Separator> : null
        }
        <div className={props.context === 'code' ? 'header none' : 'header'}>
            <MdOutlineArrowBack className= 'back' onClick={handleBack}></MdOutlineArrowBack>
            <label className='title'>My orders</label>
        </div>
        <div className='status'>
            <BsCheckCircleFill className='icon'></BsCheckCircleFill>
            <label className='status-text'>Purchase completed</label>
        </div>
        {
            items && items.length === 1 &&
            <div className='order-card'>
                <div className='order-card-container'>
                    <div className='order-card-image'>
                        <img src={items[0]?.filecover1} alt={items[0]?.title}></img>
                    </div>
                    <div className='order-card-top'>
                        <span className='title'>{items[0]?.title}</span>
                        <label className='text'>is now ready for activation in your Steam account</label>
                    </div>
                    <div className='activation-container'>
                        <RiSteamFill className='icon'></RiSteamFill>
                        <span className='code'>{items[0]?.code}</span>
                    </div>
                    <div className='order-card-bottom'>
                        <label className='text'>Struggling with how to activate the code? View the activation tutorial or contact us</label>
                    </div>
                </div>
            </div>
        }

        {
            items && items.length > 1 && items.map((item, index) => {
                return(
                    <div className='order-card-multi'>
                        <div className='order-left'>
                            <img src={item.filecover1} alt=''></img>
                        </div>
                        <div className='order-right'>
                            <span className='title'>{item.title}</span>
                            <label className='text'>is now ready for activation in your Steam account</label>
                            <div className='activation-container'>
                                <RiSteamFill className='icon'></RiSteamFill>
                                <span className='code'>{item.code}</span>
                            </div>
                            <div className='order-card-bottom'>
                                <label className='text'>Struggling with how to activate the code? View the activation tutorial or contact us</label>
                            </div>
                        </div>
                    </div>
                )
            })
           
        }
        <div className='order-info'>
            <label className='order-id'>Order #{details[0]?.orderid}</label>
            <label className='order-id'>&#8226;</label>
            <label className='order-id'>Visa</label>
            <label className='order-id'>&#8226;</label>
            <label className='order-id'>{dayCovertion(details[0]?.ordered_at)}</label>
        </div>
        <Separator></Separator>
    </div>
  )
}

export default OrderPage