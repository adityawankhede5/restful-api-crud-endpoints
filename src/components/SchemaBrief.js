import React, { Component } from 'react'

export class SchemaBrief extends Component {
    getStyle = () => {
        return {
            padding: '0px 10px',
            cursor: 'pointer',
            opacity: this.props.selected === this.props.index ? 1 : 0.5,
            backgroundColor: this.props.selected === this.props.index ? '#26ae60' : ''
        }
    }

    getSchemaNameStyle = () => {
        return {
            // borderBottom: '1px solid lightgrey',
            padding: '5px',
            fontWeight: 600,
            color: 'white'
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
