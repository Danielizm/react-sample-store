import React from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import CartItem from './Cart/CartItem';

export default class CartModal extends React.Component {

    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {cartmodalOpen,closeCartModal,cart,cartSubtotal,cartTax,cartTotal} = value;
                    if(!cartmodalOpen){return null;}
                    else{ return(
                        <CartModalContainer>
                            <div className="container">
                            <div className="row">
                            <div id="modal" className="col-12 mx-auto text-center text-capitalize">
                            {cart.length >0  ? cart.map(item=>{
                            	return <CartItem key={item.id} item={item} value={value}/>
                            }) : (<h5>Empty Cart</h5>)}
                            <div className='total text-end mt-1'>
                            <h6><span className="text-title">subtotal : <strong>$ {cartSubtotal}</strong></span></h6>
                            <h6><span className="text-title">tax : <strong>$ {cartTax}</strong></span></h6>
                            <h6><span className="text-title">total : <strong>$ {cartTotal}</strong></span></h6>
                            </div>
                            <div className="modal-btns mt-3">
                              <Link to='/cart' className='me-3'><button onClick={()=>{closeCartModal()}}>View Cart</button></Link>
                              <button>Checkout</button>
                            </div>
                            </div>
                            </div>
                            </div>
                        </CartModalContainer> );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const CartModalContainer = styled.div`
position:fixed;
top:94px;
right:0;
bottom:0;
heigh:cal(100% - 94px);
background:var(--mainWhite);
display:flex;
justifiy-content:flex-end;
box-shadow: 0 0 3px #ccc;
#modal{background:var(--mainWhite);padding:1rem 3rem}
.modal-btns{width:100%;display:flex;justify-content:flex-end;button{text-transform:uppercase;font-size:1.2rem}}
.cart-item{border-bottom:1px solid var(--mainDark);.title{font-size:0.8rem}}
`;
