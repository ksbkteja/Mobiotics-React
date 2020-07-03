import React from "react";
import './Modal.css';


const modal = (props) => props.show ? (
    
        <React.Fragment>
        <div className="modal-overlay"/>
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" onClick={props.close}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p className="title">
          CheckOut Successful.
          <br/>
          <br/>
          Total&nbsp;-&nbsp;Rs&nbsp;{props.total}&nbsp;/-
        </p>
      </div>
    </div>
    </React.Fragment>
    ):null;


export default modal;
