import React, { Component } from 'react';
class CartItem extends Component {
    format_price(money) {
        return money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        return (
            <tr>
                <th><h1>{this.props.item.title}</h1></th>
                <th><img src = {this.props.item.img} /></th>
                <th><h3>{this.format_price(this.props.item.price)} <span style = {{color: "red",}}>VND</span></h3></th>
                <th>
                    <p>
                        <span><button className ="btn btn-outline-danger" onClick = {this.props.onClickIncrease}><b>+</b></button></span>
                        <span style={{fontSize: '20px', marginLeft: '10px', marginRight: '10px'}}>{this.props.item.quantity}</span>
                        <span><button className ="btn btn-outline-dark" onClick = {this.props.onClickReduction}><b>-</b></button></span>
                    </p>
                </th>
                <th> <button onClick = {this.props.onDelete}><h2>Delete</h2></button></th>
            </tr>
        );
    }
}

export default CartItem;