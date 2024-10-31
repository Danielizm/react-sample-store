import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
	constructor() {
		super();
		this.state = {count: 1,loading:false};
	}
	increseCount = () => {
		this.setState({count: this.state.count + 1});
	}
	decreseCount = () => {
		this.state.count === 1 ? this.setState({count: 1}) : this.setState({count: this.state.count - 1});
	}
	setLoading = () => {
		this.setState({loading: !this.state.loading});
	}
    render() {
        return (
            <ProductConsumer>
				{(value)=>{
					const {id, company, img, info, price, title, inCart} = value.detailProduct;
					return (
						<div className="container py-5">
						<div className="row">
						<div className="col-10 mx-auto text-center text-slanted text-blue my-5"><h1>{title}</h1></div>
						<div className="row">
						<div className="col-10 max-auto col-md-6 my-3 text-capitalize text-center">
						<img src={img} className="img-fluid" alt="product"/>
						</div>
						<div className="col-10 max-auto col-md-6 my-3 text-capitalize">
						<h2>model : {title}</h2>
						<h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by : <span className="text-blue">{company}</span></h4>
						<h4 className="text-blue"><strong>price : <span>$</span>{price}</strong></h4>
						<p className="text-capitalize font-weight-bold mt-3 mb-0">some info abdout the product : </p>
						<p className="text-muted lead">{info}</p>
						<div>
						<div className="d-flex mb-3">
                        <span className="btn btn-black mx-1" onClick={this.decreseCount}>-</span>
                        <span className="btn btn-black mx-1">{this.state.count}</span>
                        <span className="btn btn-black mx-1" onClick={this.increseCount}>+</span>
                        </div>
						<Link to="/"><ButtonContainer>back to products</ButtonContainer></Link>
						<ButtonContainer cart onClick={()=>{this.setState({loading: !this.state.loading});setTimeout(()=>{inCart?value.increment(id,this.state.count):value.addToCart(id,this.state.count);this.setState({loading: !this.state.loading});},500)}}>
							{this.state.loading ? (
							<>
							<span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                            <span role="status">Adding...</span></>) : 'add to cart' }
							</ButtonContainer>
						</div>
						</div>
						</div>
						</div>
						</div>
						);
				}}
			</ProductConsumer>
        );
    }
}