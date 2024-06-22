import React, { Component } from 'react';
import Title from './Title';
import Price from './Price';
import Quantity from './Quantity';
import Button from './Button';
import Image from './Image';
class CartProduct extends Component {
    state = {  } 
    render() { 
        return (
            <div className='cartProduct'>
        <Title title={this.props.title}/>
        <Image title={this.props.title} image={this.props.image} width={50}/>
        <Price price={this.props.price} priceName={"Unit price"}/>
        <Price price={this.props.totalPrice} priceName={"Total Price"}/>
       <Quantity quantity={this.props.quantity}/>
       <div className="button-container">
       <Button name="+" value="increment" id={this.props.id} callback={this.props.changeQuantity}/>
       <Button name="-" value="decrement" id={this.props.id} callback={this.props.changeQuantity}/>
</div>
        </div>
    );
    }
}
 
export default CartProduct;