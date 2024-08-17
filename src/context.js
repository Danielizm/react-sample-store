import React from 'react';
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext();

class ProductProvider extends React.Component {

    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0
    }

    componentDidMount(){
        this.setProducts();
        console.log(this.state.products);
    }

    setProducts = ()=>{
        let tempProducts = storeProducts.map(item => ({...item}));
        /*let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });console.log(tempProducts);*/
        this.setState(()=>{
            return {products:tempProducts};
        });
    }

    getItem = (id) =>{
        return this.state.products.find(item => item.id === id);
    }

    handleDetail = (id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product};
        });
    }

    addToCart = (id)=>{
        const tempProducts = [...this.state.products];
        //const index = tempProducts.indexOf(this.getItem(id));
        //const product = tempProducts[index];
        const product = this.getItem(id);
        product.inCart = true;
        product.count = 1;
        product.total += product.price;
        this.setState(()=>{
            return {products:tempProducts,cart:[...this.state.cart,product]}
        },()=>{this.addTotal();console.log(this.state.cart);});

    }

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalOpen:true, modalProduct:product};
        });
    }

    closeModal = () =>{
        this.setState(()=>{
            return {modalOpen:false}
        });
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        //const selectedProduct = tempCart.find(item=>item.id === id);
        //const index = tempCart.indexOf(selectedProduct);
        //const product = tempCart[index];
        const product = this.getItem(id);
        product.count += 1;
        product.total = product.count * product.price;
        this.setState(()=>{
            return {cart:tempCart}
        },()=>{this.addTotal()});
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        //const selectedProduct = tempCart.find(item=>item.id === id);
        //const index = tempCart.indexOf(selectedProduct);
        //const product = tempCart[index];
        const product = this.getItem(id);
        product.count -= 1;
        if(product.count === 0){this.removeItem(id)}else{
        product.total = product.count * product.price;
        this.setState(()=>{
            return {cart:tempCart}
        },()=>{this.addTotal()});
        }
    }

    removeItem = (id) => {
        const tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item=>item.id !== id);
        //const index = tempProducts.indexOf(this.getItem(id));
        //const removedItem = tempProducts[index];
        const removedItem = this.getItem(id);
        removedItem.inCart = false;
        removedItem.count = 0;
        removedItem.total = 0;
        this.setState(()=>{
            return {products:tempProducts,cart:tempCart};
        },()=>{this.addTotal()});
    }

    clearCart = () => {
        this.setState(()=>{
            return {cart:[]}
        },()=>{
            this.setProducts();
            this.addTotal();
        });
    }

    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item=>{subTotal += item.total});
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return {cartSubtotal:subTotal,cartTax:tax,cartTotal:total}
        });
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }
