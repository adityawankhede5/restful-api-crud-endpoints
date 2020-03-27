import React, { Component } from 'react'

export class Title extends Component {
    getStyle = () => {
        return {
            fontSize: this.props.fontSize || 'large',
            fontWeight: 'bold',
            borderBottom: '2px solid #333333',
            padding: '3px'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                {this.props.text}
            </div>
        )
    }
}

export default Title
