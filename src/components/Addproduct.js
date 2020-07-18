import React, {Component, Suspense} from 'react';
import './Addproduct.css';


class Addproduct extends Component{

  
    onAddProduct(event){
        event.preventDefault();
        var title = event.target['title'].value;
        var price = event.target['price'].value;
        var img = event.target['img'].value;
        var id;
        if(JSON.parse(localStorage.getItem("ds_products"))){
          id = JSON.parse(localStorage.getItem("ds_products")).length + 1;
        }else{
          id = 1;
        }
        
        var products = JSON.parse(localStorage.getItem("ds_products"));
        var product = {
            id: id,
            title: title,
            price: price,
            img: img
        }

       
        if(!products){
            products = [];
        }
        products.push(product);
        localStorage.setItem("ds_products", JSON.stringify(products));
        console.log(products);
    }

    render(){
        return(
          <div className="form">
              <form className="Addpduct" onSubmit={this.onAddProduct}>
              <legend><h1>Thêm sách</h1> </legend>
              <div className="form-group">
                <label >Title</label>
                <input type="text" className="form-control" name ="title" placeholder="Input Title" />
              </div>
              <div className="form-group">
                <label >Price</label>
                <input type="text" className="form-control" name ="price" placeholder="Input Price" />
              </div>

              <div className="form-group">
              <label >Category </label>
              <select name="category">
                  <option value="comics">Comics</option>
                  <option value="textbook">Textbook</option>
                  <option value="Instruction">Instruction</option>
                  <option value="Martial">Martial arts</option>
              </select>

              </div>

              <div className="form-group">
                <label >Link Image</label>
                <input type="text" className="form-control" name ="img" placeholder="Input Link Img" />
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>   
        );
    }
}

export default Addproduct;