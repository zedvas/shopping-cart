import React, { Component } from 'react';
import Category from './Category';
import Title from './Title';
import Image from './Image';
import Price from './Price';
import Rating from './Rating';
import Controls from './Controls';
class Product extends Component {
    state = {  } 
    render() { 
        const {category, image, price, rating:{rate}, title} = this.props.product
        return (
        <>
        <div className='product'>
            <Category category={category}/>
            <Title title={title}/>
            <Image title={title} image={image}/>
            <Price price={price}/>
            <Rating rate={rate}/>
            <Controls/>
        </div>
        </>
    );
    }
}
 
export default Product;