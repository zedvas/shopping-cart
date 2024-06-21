import React, { Component } from 'react';
class Price extends Component {
    state = {  } 
    render() { 
        return (<p className='price'>{Math.round(this.props.price)}</p>);
    }
}
 
export default Price;