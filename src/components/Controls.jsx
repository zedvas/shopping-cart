import React, { Component } from 'react';
import Button from './Button';
class Controls extends Component {
    state = {  } 
    render() { 
        return (<div className='controls'>
            <Button name="add" />
            <Button name="like"/>
        </div>);
    }
}
 
export default Controls;