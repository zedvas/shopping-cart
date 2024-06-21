import React, { Component } from 'react';
class Image extends Component {
    state = {  } 
    render() { 
        return (
            <img className="image" style={{width:"100px"}} src={this.props.image} alt={this.props.title}/>

        );
    }
}
 
export default Image;