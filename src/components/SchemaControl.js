import React, { Component } from 'react'
import Button from './Button'

export class SchemaControl extends Component {

    getStyle = () => {
        return {
            // border: '5px solid crimson',
            display: 'flex',
            padding: '3px',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <Button text="Delete" onClick={this.props.deleteSchema}/>
            </div>
        )
    }
}

export default SchemaControl
