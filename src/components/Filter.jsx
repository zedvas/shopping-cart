import React, { Component } from 'react';
class Filter extends Component {
    state = {  } 
    render() { 
        return (
            <select onChange={(e) => this.props.onFilter(e.target.value)}>
                <option value="">All categories</option>
            <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="mensClothing">Men's clothing</option>
              <option value="womensClothing">Women's clothing</option>
            </select>
    
        );
    }
}
 
export default Filter;