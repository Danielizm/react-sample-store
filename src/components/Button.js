import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:uppercase;
font-size:1rem;
font-weight:bold;
background:transparent;
border:0.15rem solid var(--lightBlue);
border-color:${props=>props.cart?"var(--mainYellow)":"var(--mainPurple)"};
color:${props=>props.cart?"var(--mainYellow)":"var(--mainPurple)"};
padding:0.5rem 1rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all .5s ease-in-out;
&:hover{background:${props=>props.cart?"var(--mainYellow)":"var(--mainPurple)"};color:${props=>props.cart?"var(--mainWhite)":"var(--mainWhite)"};}
&:focus{outline:none;}
`