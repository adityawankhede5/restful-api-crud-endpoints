import React, { Component } from 'react'

export class Button extends Component {
    getStyle=()=>{
        return {
            padding: '5px 15px',
            backgroundColor: '#D63031',
            color: 'white',
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
