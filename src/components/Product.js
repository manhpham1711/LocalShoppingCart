import React, { Component } from 'react';
import Productitem from './Productitem';
import './Product.css';


class Product extends Component {
    constructor(){
        super();
        this.pageNumbers = [];
        this.state = { 
            search: "",
            products: JSON.parse(localStorage.getItem("ds_products")),
        }

        if(!this.products){
            this.products =[];
        }

      }
      onItemClickAdd(item){
          return(event)=>{
              let cart = JSON.parse(localStorage.getItem('cart'));
              if(!cart){
                  cart =[];
              }
              let oldItem = cart.find((element)=> element.title === item.title);
              if(oldItem){
                  oldItem.quantity += 1;
              }
              else{
                  item.quantity = 1;
                  cart.push(item)
              }
              localStorage.setItem('cart',JSON.stringify(cart));
              console.log(cart);
          }
      }
      onItemClickDelete(key){
        return(event)=>{
            let product = JSON.parse(localStorage.getItem("ds_products"));
            product.splice(key,1);
            localStorage.setItem("ds_products", JSON.stringify(product));

            this.setState({
                products: product
            });
        }
      }

    onchange = e => {
        this.setState({ search: e.target.value});
      };

    showProduct(){
        const { search } = this.state;
        const filteredProducts = this.state.products.filter(product => {
        return product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        var listProduct = filteredProducts.map((item,key) => <Productitem
                                                            key={key} 
                                                            item = {item}
                                                            onItemClick = {this.onItemClickAdd(item)}
                                                            onItemClickDelete = {this.onItemClickDelete(key)}
                                                            /> );
        return listProduct;
    }

    SortByPriceAsc() {
        let sortedProductsAsc;
            sortedProductsAsc = this.state.products.sort((a, b) => {
                return parseInt(a.price) - parseInt(b.price);
            })
            this.setState({
                products: sortedProductsAsc
            })
    }

    SortByPriceDsc() {
        let sortedProductsDsc;
            sortedProductsDsc = this.state.products.sort((a, b) => {
                return parseInt(b.price) - parseInt(a.price);
            })
            this.setState({
                products: sortedProductsDsc
            })
    }


    
    render() {


        return (
            <div>
                <div className = "container">
                    <br />
                    <div className= "search">
                        <div className="form-group">
                            <label><h2>Search Name</h2></label>
                            <input  type="text"
                                    label="Search Country" 
                                    placeholder="input Name product" 
                                    className="form-control" 
                                    icon="search"
                                    onChange ={this.onchange}
                            />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className = "row">
                        <div className ="col-sm-6">
                            <h1>List Product</h1>
                        </div>
                        <div className ="col-sm-6" >
                            <span style = {{marginLeft: "60%"}}>
                                <button className="btn btn-info"  style = {{marginTop: "1%"}} onClick = {this.SortByPriceAsc}>Tăng</button>

                                <button style = {{marginLeft: "5%", marginTop: "1%"}}  className="btn btn-info" onClick = {this.SortByPriceDsc}>Giam</button>
                            </span>
                        </div>
                    </div>
                    <div className = "row">
                    {this.showProduct()}
                    </div>
                </div>

            </div>
        );
    }
}

export default Product;