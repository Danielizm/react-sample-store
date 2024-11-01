import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component{
	render(){
		const {id, title, img, price, inCart} = this.props.product;
		return(
			<ProductWrapper className="product-wrapper col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card">
				<ProductConsumer>
				{(value)=> (
				<div className="img-container p-5" onClick={()=>value.handleDetail(id)}>
				   <img src={img} alt="product" className="card-img-top"/>
				   <div className='card-btns'>
				   <Link to="/details" className="mb-2"><button>View Details</button></Link>
				   <button className="" onClick={()=>{inCart ? value.increment(id) : value.addToCart(id);value.openModal(id);}}>
				   Add to Cart
				   </button>
				   </div>
				</div>
				)}
				</ProductConsumer>
				<div className="card-footer d-flex justify-content-between">
				<p className="align-self-center mb-0">{title}</p>
				<h5 className="text-blue font-italic mb-0"><span className="mr-1">$</span>{price}</h5>
				</div>
				</div>
			</ProductWrapper>
			);
	}
}

Product.propTypes = {
	product:PropTypes.shape({
		id:PropTypes.number,
		img:PropTypes.string,
		title:PropTypes.string,
		price:PropTypes.number,
		inCart:PropTypes.bool,
	}).isRequired
};

const ProductWrapper = styled.div`
.card{border-color:transparent;transition:all .5s linear;}
.card-footer{background:transparent;border-top:transparent;transition:all .5s linear;}
&:hover{
	.card{border:0.04rem solid rgba(0,0,0,.2);box-shadow:2px 2px 5px 0px rgba(0,0,0,.2)}
	.card-footer{background:rgba(247,247,247)}
	.card-btns{display:flex;}
}
.img-container{position:relative;overflow:hidden;}
.card-img-top{transition:all .5s linear;}
.img-container:hover .card-img-top{transform:scale(1.2)}
.img-container:hover .cart-btn{transform:translate(0,0)}
.card-btns{
display:none;
position:absolute;
inset:0;
background:rgba(255,255,255,.6);
flex-direction:column;
align-items:center;
justify-content:center;
button{background:var(--mainDark);color:var(--mainWhite)}
}

`;