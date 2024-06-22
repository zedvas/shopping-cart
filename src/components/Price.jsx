import React, { Component } from 'react';
class Price extends Component {
    state = {  } 
    render() { 
        return (<p className='price'>{Math.round(Number(this.props.price))}</p>);
    }
}
 
export default Price;