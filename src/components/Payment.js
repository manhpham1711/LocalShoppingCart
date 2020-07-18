import React, { Component } from 'react';
import PayItem from './PayItem';


class Payment extends Component {
    constructor(){
        super();
        this.state= {
            orders: JSON.parse(localStorage.getItem("order")),
            id: ""
        }

        if(!this.state.orders){
            this.state.orders = [];
        }
    }
     onItemClickDelete(id){
    //     alert(key);
    }



    showOrder(){
    
    var listOrder = this.state.orders.map((item,key) => <PayItem
                                                        key={key} 
                                                        item = {item}
                                                        onItemClickDelete = {this.onItemClickDelete(key)}
                                                        /> );
    return listOrder;
    }

    render(){
        return(
            <div style = {{width: "100%"}}>
                <div className ="col-sm-12">
                    <center><h2>Danh Sách Đơn Đặc Hàng</h2></center>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Price</th>
                                <th>Product</th>
                                <th>Function</th>
                            </tr>
                    </thead>
                    <tbody>
                        {this.showOrder()}
                    </tbody>
                    </table>
                    <br />
                </div>
                
            </div>
        );
    }
}
export default Payment;