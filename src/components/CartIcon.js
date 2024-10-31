
import React, { useContext } from "react";
import { ProductContext } from '../context';
import CartEmpty from './CartEmpty.svg';
import CartPlus from './CartPlus.svg';

export default function CartIcon(){
    const {cartTotal,cartmodalOpen,openCartModal,closeCartModal, cartCount} = useContext(ProductContext);
    return (
        <div className="cart-icon" onClick={()=>{cartmodalOpen?closeCartModal():openCartModal()}}><img src={cartTotal === 0 ?CartEmpty:CartPlus} alt=''/><span>{cartCount}</span></div>
    )
}