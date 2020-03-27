import React, { Component } from 'react'

export class SchemaBrief extends Component {
    getStyle = () => {
        return {
            padding: '5px',
            cursor: 'pointer'
        }
    }

    getSchemaNameStyle = () => {
        return {
            borderBottom: '1px solid lightgrey',
            padding: '5px',
            fontWeight: 600
        }
    }


    render() {
        return (
            <div style={this.getStyle()} onClick={()=>{this.props.selectSchema(this.props.index)}}>
                <div style={this.getSchemaNameStyle()}>{this.props.schema.name}</div>
            </div>
        )
    }
}

export default SchemaBrief
