import React, {Component} from "react";

class PayDetail extends Component {
render(){
    return(
        <div className ="col-sm-4">
                <h1>Ten: {this.props.item.title}</h1> 
                Hinh anh: <img src = {this.props.item.img} />
                <h3>Gia: {this.props.item.price}</h3>
                <h3>So luong: {this.props.item.quantity}</h3>
                <hr />
        </div>
    )
}
}
export default PayDetail;