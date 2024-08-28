import React from 'react';
import{Link} from 'react-router-dom';
import { ButtonContainer } from '../Button';

const CartTotal = ({value,history}) => {
	const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="total-block col-12 mt-2 ml-sm-5 ml-md-auto text-capitalize text-end">
    <div className="total-link">
    <Link to="/"><ButtonContainer className="text-capitalize mb-3 px-5" onClick={()=>clearCart()}>clear cart</ButtonContainer></Link>
    </div>
    <div className="total-num">
    <Link to="/" className='d-block mb-1'>Continue Shopping</Link>
    <h5><span className="text-title">subtotal : <strong>$ {cartSubtotal}</strong></span></h5>
    <h5><span className="text-title">tax : <strong>$ {cartTax}</strong></span></h5>
    <h5><span className="text-title">total : <strong>$ {cartTotal}</strong></span></h5>
    <ButtonContainer cart className="m-0">Checkout</ButtonContainer>
    </div>
    </div>
    </div>
    </div>
  )
}

export default CartTotal;