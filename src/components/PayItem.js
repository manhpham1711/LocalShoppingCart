import React, {Component} from 'react';
import PayDetail from'./PayDetail';

class PayItem extends Component {
    format_price(money) {
        return money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    showDetel(){
        const listProduct = this.props.item.product;
        var list =  listProduct.map((item,key) => <PayDetail
                                                        key={key} 
                                                        item = {item}
                                                        />)  
        return list;
    }
    render() {
       
        return (
            <tr>
                <th><h1>{this.props.item.name}</h1></th>
                <th><p>{this.props.item.name}</p></th>
                <th><h3>{this.props.item.price} <span style = {{color: "red",}}> VND</span></h3></th>
                <th>{this.showDetel()}</th>
                <th> <button onClick = {this.props.onItemClickDelete}><h2>Delete</h2></button></th>
            </tr>
        );
    }
}
export default PayItem;
