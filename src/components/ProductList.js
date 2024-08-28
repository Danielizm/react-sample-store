import React,{Component} from 'react';
import Product from './Product';
import Title from './Title'
import Banner from './Banner';
import {ProductConsumer} from '../context'
import styled from 'styled-components';

export default class ProductList extends Component{
	render(){
		return(
			<div>
				<Banner/>
			    <ProductListWrap>
			    	<div className="py-5">
			    	<div className="container">
			    	<Title title="products"/>
			    	<div className="product-list row">
			    	<ProductConsumer>
			    		{ value =>{
			    			return value.products.map(product => {
			    			return <Product key={product.id} product={product} />;
			    		    });
			    	    }}
			    	</ProductConsumer>
			    	</div>
			    	</div>
			    	</div>
			    </ProductListWrap>
				{/*<Product />*/}
			</div>
			);
	}
}

const ProductListWrap = styled.div`
`;