import React from 'react';
import Modal from '../Modal/Modal.js';

export default class Total extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {
        isShowing: false
    }
}

openModalHandler = () => {
    this.setState({
        isShowing: true
    });
}

closeModalHandler = () => {
    this.setState({
        isShowing: false
    });
}

  render() {
    
    let total = this.props.total.toFixed(2);
    
    return (
      <div className="navbar">
      <div className="left">
        <p>Total:{total} </p>
      </div>

                <button className="cart-button bottom" onClick={this.openModalHandler}>CHECKOUT</button>
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    total={total}/>
    </div>
    );
  }
}
