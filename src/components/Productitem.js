import React, { Component} from 'react';
import './Addproduct.css';
class Productitem extends Component{

    format_price(money) {
        return money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
render(){
    return(
    <div className ="col-sm-4">
        <div className="thumbnail">
            <img data-src="#" src ={this.props.item.img} alt="Name" />
            <div className="caption">
                <h3>{this.props.item.title}</h3>
                <p>
                </p><h3>{this.format_price(this.props.item.price)} <span style = {{color: "red",}}>VND</span></h3>
                <p />
                <p>
                <button onClick={this.props.onItemClick} className="btn btn-danger">Buy </button>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.props.onItemClickDelete} className="btn btn-danger"> Delete </button>
                </p>
            </div>
        </div>
    </div>
    );
}
}

export default Productitem;
