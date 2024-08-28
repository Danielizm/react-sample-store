import React,{Component} from 'react'
import Title from '../Title'
import CarColumns from './CarColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList';
import CartTotal from './CartTotal';
import styled from 'styled-components';

export default class Cart extends Component{
	render(){
		return(
			<CartWrapper className="cart-wrapper">
			<ProductConsumer>
			{(value)=>{
				const {cart} = value;
				if(cart.length>0){
					return (
					<div className="inner-wrapper">
				    <Title title="Shopping cart"/>
                    <div className='cart-table'>
				    <CarColumns />
				    <CartList value={value}/>
				    <CartTotal value={value} history={this.props.history}/>
                    </div>
				    </div> );
			    }else{
			    	return (
			    	<EmptyCart /> );
			    }
			}}
			</ProductConsumer>
			</CartWrapper>
			);
	}
}

const CartWrapper = styled.section`
padding:2rem 3rem;
.inner-wrapper{
max-width:1400px;
margin:auto;
h1{margin-bottom:50px;}
.cart-table{
padding:2rem;
background:var(--mainWhite);
.cart-item{border-bottom:1px solid var(--mainDark);padding:1rem 0;}
.total-block{display:flex;justify-content:space-between;padding:2rem 0 0}
}
}
`;