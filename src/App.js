import React from 'react';
import './App.css';
import data from './pages/Data.json';
import Total from './pages/Tables.js';
import Product from './pages/Product.js';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      number:0,
      productList: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: data });
    }, 1000);
  }


  calculateTotal = (price) => {
    this.setState({
      total: this.state.total + price
    });
  }


  render() {
    if (!this.state.productList) return <p>loading...!!!!</p>;

    var component = this;
    var products = this.state.productList.map(function(product) {
      return (
        <Product
          brandName={product.brandName}
          productName={product.productName}
          quantity={product.quantity}
          price={product.price}
          mrp={product.mrp}
          image={product.image}
          offer={product.offer}
          handleTotal={component.calculateTotal}
        />
      );
    });

    return (
      <div>
        {products}
        <Total total={this.state.total} number={this.state.number} />
      </div>
    );
  }
}
 export default ProductList;
