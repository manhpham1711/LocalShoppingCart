import React, { Component } from 'react';
import './App.css';
import Addproduct from './components/Addproduct';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Payment from './components/Payment';

class App extends Component {
  constructor(){
    super();
    this.state ={
      menu: "product"
    }
    this.onProduct = this.onProduct.bind(this);
    this.onAddProduct = this.onAddProduct.bind(this);
    this.onCart = this.onCart.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onPay = this.onPay.bind(this);
  }
  onProduct(){
    this.setState({
      menu: "product"
    })
  }
  onAddProduct(){
    this.setState({
      menu: "add-product"
    })
  }
  onCart(){
    this.setState({
      menu: "cart"
    })
  }
  onLogin(){
    this.setState({
      menu: "login"
    })
  }
  onPay(){
    this.setState({
      menu: "pay"
    })
  }

  render(){
    return (
      <div className="container">
        <div className = "header">
          <div className="row">
            <button className="btn btn-danger" onClick={this.onProduct}>Product</button>
            <button className="btn btn-danger" onClick={this.onAddProduct}>Add Product</button>
            <button className="btn btn-danger" onClick={this.onCart}> Cart</button>
            <button className="btn btn-danger" onClick={this.onPay}> List Payment</button>
            <button className="btn btn-danger" onClick={this.onLogin}><span className="glyphicon glyphicon-log-in"></span> Login</button>
          </div>
        </div>
        <div className="boundary"></div>
        
        <div className="row">
          {this.state.menu ==="product"? <Product />:null}
          {this.state.menu ==="add-product"? <Addproduct />:null}
          {this.state.menu ==="cart"?<Cart />:null}
          {this.state.menu ==="login"?<Login />:null}
          {this.state.menu ==="pay"?<Payment />:null}
        </div>
         
       <hr />
       
    </div>
    
    );
  }
  
}

export default App;
