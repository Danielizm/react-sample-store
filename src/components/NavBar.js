import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class NavBar extends Component{
	render(){
		return(
			<div>
				<NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
					<Link to="/">
						<img src={logo} alt="store" className="navbar-brand"/>
					</Link>
                    <div className="menu"> 
					    <ul className="navbar-nav align-items-center">
					    	<li className="nav-item ml-5">
					    	<Link to="/" className="nav-link">Products</Link>
					    	</li>
					    </ul>
					    <Link to="/cart" className="ml-auto">
					    <ButtonContainer><span className="mr-2"><i className="fas fa-cart-plus"/></span>My cart</ButtonContainer>
					    </Link>
                    </div>
				</NavWrapper>
			</div>
			);
	}
}

const NavWrapper = styled.nav`
background:var(--mainWhite)!important;
display:flex;
justify-content: space-between;
padding:0.1rem 1rem;
.menu{display:flex;align-items:center;}
.navbar-brand{max-width:80px;}
.nav-link{color:var(--mainDark)!important;font-szie:1.3rem;text-transform:capitalize;}
`