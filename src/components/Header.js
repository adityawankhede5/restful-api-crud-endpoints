import React, { Component } from 'react'

export class Header extends Component {

    getStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'column',
            margin: '-10px',
            marginBottom: '10px',
            padding: '10px',
            fontWeight: 'bold',
            // borderBottom: '2px solid #333333',
            boxShadow: '0 1px 3px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,0.24)',
            color: 'white',
            // backgroundColor: '#333333'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <span>RESTful API CRUD Endpoints</span>
                <span style={{fontSize: 'x-small'}}>for express</span>
            </div>
        )
    }
}

export default Header
