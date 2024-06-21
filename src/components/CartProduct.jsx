import React, { Component } from 'react';
import Title from './Title';
import Price from './Price';
import Quantity from './Quantity';
class CartProduct extends Component {
    state = {  } 
    render() { 
        return (
            <div className='cartProduct'>
        <Title title={this.props.title}/>
        <Price price={this.props.price}/>
       <Quantity quantity={this.props.quantity}/>
        </div>
    );
    }
}
 
export default CartProduct;