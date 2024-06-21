import React, { Component } from 'react';
import Button from './Button';
class Controls extends Component {
    state = {  } 
    render() { 
        return (<div className='controls'>
            <Button name="add" id={this.props.id} callback={this.props.onAdd}/>
            <Button name="like" id={this.props.id} callback={this.props.onLike} liked={this.props.liked}/>
        </div>);
    }
}
 
export default Controls;