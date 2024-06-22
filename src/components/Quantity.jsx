import React, { Component } from 'react';
class Quantity extends Component {
    state = {  } 
    render() { 
        return (
            <p>Qty: <span className='quantity'>{this.props.quantity}</span></p>
        );
    }
}
 
export default Quantity;