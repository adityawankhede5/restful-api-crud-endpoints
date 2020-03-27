import React, { Component } from 'react'
import Title from './Title'
import Properties from './Properties'
import SchemaControl from './SchemaControl'

export class Main extends Component {    
    getStyle = () => {
        return {
            // border: '5px solid cadetblue',
            height: '100%',
            width: '50%',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '0px'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>

                <Title text={this.props.schema ? this.props.schema.name : 'Select or Create Schema'}/>
                
                {this.props.schema ? <Properties schema={this.props.schema}  addNewProperty={this.props.addNewProperty} deleteProperty={this.props.deleteProperty}/> : ''}
                {this.props.schema ? <SchemaControl deleteSchema={this.props.deleteSchema} /> : ''}
                
                
                
            </div>
        )
    }
}

export default Main
