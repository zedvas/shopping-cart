import React, { Component } from 'react';
import Title from './Title';
import Price from './Price';
import Quantity from './Quantity';
import Button from './Button';
class CartProduct extends Component {
    state = {  } 
    render() { 
        return (
            <div className='cartProduct'>
        <Title title={this.props.title}/>
        <Price price={this.props.price} priceName={"Unit price"}/>
        <Price price={this.props.totalPrice} priceName={"Total Price"}/>
       <Quantity quantity={this.props.quantity}/>
       <Button name="+" value="increment" id={this.props.id} callback={this.props.changeQuantity}/>
       <Button name="-" value="decrement" id={this.props.id} callback={this.props.changeQuantity}/>

        </div>
    );
    }
}
 
export default CartProduct;