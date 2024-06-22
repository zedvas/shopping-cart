import React, { Component } from 'react';
class Sort extends Component {
    state = {  } 
    render() { 
        return (
            <select onChange={(e)=>this.props.onSort(e.target.value)}>
                <option value="priceAsc">Price (Low-High)</option>
                <option value="priceDesc">Price (High-Low)</option>
                <option value="rating">Highest rated</option>
            </select>
        );
    }
}
 
export default Sort;