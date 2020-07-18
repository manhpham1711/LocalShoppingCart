import React, { Component } from 'react';
import CartItem from './CartItem';
import './Addproduct.css';

class Cart extends Component {
    constructor(){
        super();
        this.state= {
            carts: JSON.parse(localStorage.getItem("cart"))
        }

    }

   
    onItemClickDelete(key){
        return(event)=>{
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart.splice(key,1);
            localStorage.setItem("cart", JSON.stringify(cart));
            this.setState({
                carts: JSON.parse(localStorage.getItem("cart"))
            })
            console.log(cart);
        }   
    }

    onClickButtonIncrease(id){
        return(event)=>{
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart[id].quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            this.setState({
                carts: JSON.parse(localStorage.getItem("cart"))
            })
        }
    }

    onClickButtonReduction(id){
        return(event)=>{
            let cart = JSON.parse(localStorage.getItem("cart"));
            if(cart[id].quantity > 1){
                cart[id].quantity -= 1;
                localStorage.setItem("cart", JSON.stringify(cart));
                this.setState({
                    carts: JSON.parse(localStorage.getItem("cart"))
                })
            }
        }
    }

    numberProductInCart(){
        const {carts} = this.state;
        var number;
        if(carts){
        number = carts.length;
        return number;
        }else{
            return 0;
        }
        
    }
    sumSalary(){
        const {carts} = this.state;
        var sum = 0;
        if(carts){
        for(var i = 0; i < carts.length; i++){
            sum += carts[i].quantity * carts[i].price;
        }
        }
        return sum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
    
    byProduct(event){
        event.preventDefault();

        var product = JSON.parse(localStorage.getItem("cart"));
        var sumPrice = 0;
        if(product){
            for(var i = 0; i < product.length; i++){
                sumPrice += product[i].quantity * product[i].price;
            }
        }
        var name = event.target['name'].value;
        var address = event.target['address'].value;
       
        
        var id;
        var orders = JSON.parse(localStorage.getItem("order"));
        if(!orders){
            orders = [];
            id = 1;
        }else{
            id = orders.length;
        }
        var order = {
            id: id,
            name: name,
            address: address,
            product: product,
            price: sumPrice
        }

        orders.push(order);
        localStorage.setItem("order", JSON.stringify(orders));
        console.log(orders);
        localStorage.removeItem("cart");

        alert("Thanh toán thành công & Đợn hàng của bạn đang ở trong mục List Pyment");
    }

    showCart(){
        if(this.state.carts == null){
            return <h2>Giỏ Hàng Rỗng</h2>;
        }else{
        const listCart = this.state.carts.map((item,key) => <CartItem
                                                            key={key} 
                                                            item = {item}
                                                            onDelete = {this.onItemClickDelete(key)}
                                                            onClickIncrease = {this.onClickButtonIncrease(key)}
                                                            onClickReduction = {this.onClickButtonReduction(key)}
                                                            /> );
      return listCart;
        }
    }

    // this.state
    render() {
        return (
        <div style = {{width: '100%'}}>
            <div className ="col-sm-7">
                <center><h2>Danh Sách Sản Phẩm</h2></center>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Img</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Function</th>
                        </tr>
                </thead>
                <tbody>
                        {this.showCart()}
                </tbody>
                </table>
                <br />
                <br />
                <hr />
                <h1>Number product in Cart: <span style = {{color: "#33FF66"}}><b>{this.numberProductInCart()}</b></span></h1>
                <h2> Sumsalary in Cart : {this.sumSalary()} <span style = {{color: "red"}}>VND</span></h2>
                <br />
            </div>
            <div className ="col-sm-5">
                <div className="container">
                    <center><h2>Thông Tin Giao Hàng</h2></center>   
                    <form onSubmit={this.byProduct}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" name ="name" id="name" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input type="test" className="form-control" name ="address" id="address" placeholder="Enter Name" />
                        </div>
                        <center><button type="submit">Chuyển Hàng</button></center>
                    </form>
                </div>

            </div>
        </div>
        );
    }
}

export default Cart;