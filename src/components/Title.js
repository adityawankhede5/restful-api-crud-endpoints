import React, { Component } from 'react'

export class Title extends Component {
    getStyle = () => {
        return {
            fontSize: this.props.fontSize || 'large',
            color: this.props.color || 'black',
            fontWeight: 'bold',
            borderBottom: '2px solid #333333',
            padding: '3px',
            display: 'flex',
            flexDirection: 'row',
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <div style={{flexGrow: 1}}>{this.props.text}</div>
                {this.props.copyCallback ? <span style={this.props.getCopyButtonStyle()} onClick={()=>{this.props.copyCallback(this.props.toCopy)}}>Copy</span> : ''}
                
            </div>
        )
    }
}

export default Title
