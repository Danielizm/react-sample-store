import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import CartIcon from './CartIcon';

export default function NavBar(){
	return(
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
				    <CartIcon />
                </div>
			</NavWrapper>
	);
}

const NavWrapper = styled.nav`
position:sticky;
top:0;
z-index:100;
box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.1);
background:var(--mainWhite)!important;
display:flex;
justify-content: space-between;
padding:0.1rem 1rem;
.menu{display:flex;align-items:center;}
.menu ul{list-style:none;margin-right:20px}
.navbar-brand{max-width:80px;}
.nav-link{color:var(--mainDark)!important;font-szie:1.3rem;text-transform:uppercase;}
`