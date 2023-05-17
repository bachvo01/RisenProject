import React from 'react'
import OrderPage from '../../User/Orders/OrderPage/OrderPage'
import {BsCheckLg} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Separator from '../../../components/Separator/Separator'
import './activation.scss'
function Activation() {
  return (
    <div className='activate-container'>
      <div className='activate-top'>
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
            <Link to = '/cart/payment' className='step two'>
                <span className='number'><BsCheckLg className='icon'></BsCheckLg></span>
                <span className='text'>Payment</span>
                <span className='spacer'>
                  <div className='inner'></div>
                </span>
            </Link>
            <div className='step three'>
                <span className='number'>3</span>
                <span className='text'>Game activation</span>
            </div>
        </div>
      </div>
      
      <OrderPage context = 'code'></OrderPage>
    </div>
  )
}

export default Activation