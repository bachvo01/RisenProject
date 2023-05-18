import React, { useEffect, useState, useContext } from 'react'
import './orderMini.scss'
import { CartContext } from '../../../../Context/CartContext'
function OrderMini(props) {
    const [items, setItems] = useState([])
    const { URL } = useContext(CartContext)
    useEffect(() => {   
        const getItems = async () => {
            const token = localStorage.getItem("accessUserToken")
            const body = { orderID : props.id}
            const response = await fetch(`${URL}/get/orders/details`,{
                method: "POST",
                headers: {"Content-type" : "application/json", "Authorization" : "Bearer " + token},
                body: JSON.stringify(body)
            })
            .then((res) => res.json())
            .then((data) => setItems(data))
        }
        getItems()
    },[])

  return (
    <div className='order-mini-container'>
        {
            items && items.map((product, index) => {
                return(
                    <div className='order-mini' key = {product.productid}>
                        <div className='order-content'>
                            <div className='order-info'>
                                <div className='order-image'>
                                    <img src = {product.filecover1} alt=''/>
                                </div>
                                <div className='order-details'>
                                    <label className='title'>{product.title}</label>
                                    <div className='order-specs'>
                                        <label className='system'>System: PC</label>
                                        <label className='system'>Platform: Steam</label>
                                    </div>
                                </div>
                            </div>
                            <label className='price'>${product.price}</label>
                        </div>
                        <div className='spacer'></div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default OrderMini