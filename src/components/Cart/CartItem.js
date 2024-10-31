import React from 'react';

const CartItem = ({item,value}) => {
	const {id, title, img, price, total, count} = item;
	const {increment, decrement, removeItem} = value;
  return (
    <div className="row my-1 text-capitalize text-center align-items-center cart-item">
    <div className="col-10 mx-auto col-lg-2">
    <img src={img} alt="product" style={{width:"5rem",height:"5rem"}} className="img-fluid"/>
    </div>
    <div className="col-10 mx-auto col-lg-2 title">
    <span className="d-lg-none">product : </span>
    {title}
    </div>
    <div className="col-10 mx-auto col-lg-2">
    <span className="d-lg-none">price : </span>
    $ {price}
    </div>
    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
    <div className="d-flex justify-content-center">
    <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
    <span className="btn btn-black mx-1">{count}</span>
    <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
    </div>
    </div>
    <div className="col-10 mx-auto col-lg-2">
    <div className="cross" onClick={()=>removeItem(id)}>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
        </svg>
    </div>
    </div>
    <div className="col-10 mx-auto col-lg-2">
    <span className="d-lg-none">Total : </span>
    <strong>$ {total}</strong>
    </div>
    </div>
  )
}

export default CartItem;