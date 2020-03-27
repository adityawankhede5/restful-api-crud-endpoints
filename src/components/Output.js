import React, { Component } from 'react'

export class Output extends Component {
    getStyle = () => {
        return {
            border: '5px solid crimson',
            height: '100%',
            width: '30%',
            paddingBottom: '0px'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                
            </div>
        )
    }
}

export default Output
