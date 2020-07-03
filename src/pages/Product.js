import React from 'react';

export default class Product extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        qty: 0
      };
    }
  
    add = () => {
      this.setState({
        qty: this.state.qty + 1
      });
      this.props.handleTotal(this.props.price);
    }
  
    subtract = () => {
      this.setState({
        qty: this.state.qty - 1
      });
      this.props.handleTotal(-this.props.price);
    }
  
    render() {
      return (
        <div>
            <div className="each">
            <div className="one">
              <img src={this.props.image} alt={`${this.props.brandName}`}/>
              <h5>{this.props.offer}</h5>
            </div>
            <div className="two">
              <h3 className="brand-name">{this.props.brandName}</h3>
              <h3>{this.props.productName}</h3>
              <h4>{this.props.quantity}</h4>
              <h4>MRP {this.props.mrp}</h4>
              <h4><b>Rs {this.props.price}</b></h4>
              
              <div className="three value">
                <button className="cart-button" onClick={this.add}>ADD CART</button>          
                  <button className="minus" onClick={this.subtract} disabled={this.state.qty < 1} >-</button>
                  <p className="length">{this.state.qty}</p>
                  <button className="plus" onClick={this.add} >+</button>
              </div>
            </div>
        </div>
        
        </div>
      );
    }
  }
  
  
  
  