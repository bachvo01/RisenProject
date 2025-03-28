import React, {useContext, useState} from 'react'
import './payment.scss'
import GreenButton from '../../../components/Button/GreenButton/GreenButton'
import Separator from '../../../components/Separator/Separator'
import Headings from '../../../components/ProductList/ProductPages/Headings/Headings'
import {BsCartFill} from 'react-icons/bs'
import {BsCheckLg} from 'react-icons/bs'
import {BsArrowLeftCircle} from 'react-icons/bs'
import {GrSecure} from 'react-icons/gr'

import visa from '../../../images/visa-mastercard.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../Context/CartContext'


function Payment() {
  const {payment, setPayment, setCart, total, setTotal, quantity, setQuantity, URL} = useContext(CartContext)
  const [credit, setCredit] = useState([])
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [cvc, setCVC] = useState('')
  const [status, setStatus] = useState('')
  const handleCardNumb = (e) => {
    const input = e.target.value
    const cardNumber  = [...input].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim()
    setNumber(cardNumber)
}

    const handleName = (e) => {
        const input = e.target.value
        const name = input.toUpperCase()
        setName(name)
    }

    const handleDate = (e) => {
        const input = e.target.value
        setDate(input)
    }

    const handleCVC = (e) =>{
        const input = e.target.value
        setCVC(input)
    }

    const handlePay = async () => {
        const token = localStorage.getItem("accessUserToken")
        const body = {
            creditNumb : number,
            creditName : name,
            creditDate : date,
            creditCVC : cvc,
            order : payment,
            totalPrice : total,
            quantity : quantity
        }

        const response = await fetch(`${URL}/pay`, {
            method: 'POST',
            headers: {"Content-type" : "application/json" , "Authorization" : "Bearer " + token},
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((data) => {
            setStatus(data.status)
            if(data.status !== 'invalid card'){
                window.location = '/cart/activate'
            }
        })
    }

  return (
      <div className='payment-container'>
      <div className='payment-inner-container'>
            <Separator></Separator>
            <Separator status = '3'></Separator>
            <div className='step-container'>
                <Link to = '/cart' className='step one'>
                    <span className='number'><BsCheckLg className='icon'></BsCheckLg></span>
                    <span className='text'>Shopping cart</span>
                    <div className='spacer'>
                      <div className='inner'></div>
                    </div>
                </Link>
                <div className='step two'>
                    <span className='number'>2</span>
                    <span className='text'>Payment</span>
                    <span className='spacer'></span>
                </div>
                <div className='step three'>
                    <span className='number'>3</span>
                    <span className='text'>Game activation</span>
                </div>
            </div>
            <Separator></Separator>
            
            <div className='content-container'>
                <div className='left-container'>
                    <div className='credit-card'>
                      <Headings text = 'Credit card'></Headings>
                      <div className='credit-form'>
                         <div className='credit-level one'>
                            <div className='visa'>
                                <img src={visa} alt='visa'></img>
                            </div>
                            <label className='title'>Credit/debit card</label>
                         </div>
                         <div className='credit-level two'>
                            <label>Card number</label>
                            <input type="text" onInput={handleCardNumb} maxLength={16} placeholder='**** **** **** ****'/>
                         </div>
                         <div className='credit-level three'>
                            <label>Cardholder name</label>
                            <input type="text" value={name} onInput={handleName} placeholder='J. Doe'/>
                         </div>
                         <div className='credit-level four'>
                            <div className='expiration'>
                                <label>Expiry date</label>
                                <input type="text" placeholder='MM / YY' onInput={handleDate} maxLength={5}/>
                            </div>
                            <div className='security'>
                                <label>Security number</label>
                                <input type="text" placeholder='CVC' onInput={handleCVC} maxLength={3}/>
                            </div>
                            
                         </div>
                      </div>
                    </div>
                    {status === 'invalid card' && <label className='error'>Credit card is invalid*</label>}
                </div>
                <div className='right-container'>
                    <div className='summary-final'>
                        <Headings text = 'Summary'></Headings>
                        <div className='order-container'>
                            {
                                payment.map((product, index) => {
                                    return(
                                        <div className='order-inner-container' key = {index}>
                                            <div className='order-item'>
                                                <div className='order-item-left'>
                                                    <label className='title'>{product.title}</label>
                                                    <label className='platform'>Steam</label>
                                                </div>
                                                <div className='order-item-right'>
                                                    <label className='price'>${product.price}</label>
                                                </div>
                                            </div>
                                            <div className='spacer-mini'></div>
                                        </div>
                                        
                                    )
                                })
                            }
                            <div className='secure-container'>
                                <GrSecure className='lock'></GrSecure>
                                <div className='divisor'></div>
                                <div className='secure'>
                                    <label className='header'>Secure payment</label>
                                    <label className='sub-header'>256-bit SSL Secured</label>
                                </div>
                            </div>
                        </div>

                        <div className='pay-container'>
                            <div className='total-container'>
                                <label className='text'>Total</label>
                                <label className='price'>${total}</label>
                            </div>
                            <div className='pay-button' onClick={handlePay}>Pay</div>
                        </div>
                        <div className='policy'>
                            <p>By clicking "Pay" I acknowledge having read and accepted the 
                            <Link to = '/termsOfUse' className='link'> terms and conditions</Link>, 
                            and the  <Link to = '/privacyPolicy' className='link'> privacy policy</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <Separator></Separator>
        
      </div>
)
}

export default Payment