import React, { Component } from 'react';
import Product from './Product';
class Products extends Component {
    state = {  } 
    render() { 
        return (
        <div className='container'>
        {this.props.products.map(product=> {
            return <Product key={product.id} product={product}/>
        })}
        </div>
    );
    }
}
 
export default Products;