import React, { Component } from 'react';
class Rating extends Component {
    state = {  } 
    render() { 
        return (<p>{this.props.rate} stars</p>);
    }
}
 
export default Rating;