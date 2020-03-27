import React, { Component } from 'react'

export class Header extends Component {

    getStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'row',
            padding: '10px',
            fontSize: 'x-large',
            fontWeight: 'bold',
            // borderBottom: '2px solid #333333',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            color: 'white',
            backgroundColor: '#333333'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                CRUD Template Builder
            </div>
        )
    }
}

export default Header
