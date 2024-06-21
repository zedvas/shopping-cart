import React, { Component } from 'react';
class Quantity extends Component {
    state = {  } 
    render() { 
        return (
            <p>Qty: {this.props.quantity}</p>
        );
    }
}
 
export default Quantity;