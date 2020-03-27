import React, { Component } from 'react'

export class Button extends Component {
    getStyle=()=>{
        return {
            padding: '5px 10px',
            backgroundColor: '#333333',
            color: 'white',
            fontWeight: 600,
            margin: '3px',
            cursor: 'pointer'
        }
    }
    render() {
        return (
            <span style={this.getStyle()} onClick={this.props.onClick}>{this.props.text}</span>
        )
    }
}

export default Button
