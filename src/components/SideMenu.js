import React, { Component } from 'react'
import NewSchema from './NewSchema'
import AllSchemas from './AllSchemas'

export class SideMenu extends Component {
    getStyle = () => {
        return {
            // border: '5px solid crimson',
            height: '100%',
            width: '20%',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            paddingBottom: '0px'
            // boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
        }
    }

    getSchemaNamesArray = () => {
        return this.props.allSchemas.map((schema)=>{
            return schema.name;
        })
    }
    
    render() {
        return (
            <div style={this.getStyle()}>
                <NewSchema createNewSchema={this.props.createNewSchema} schemaNames={this.getSchemaNamesArray()}/>
                <AllSchemas allSchemas={this.props.allSchemas} selectSchema={this.props.selectSchema}/>
            </div>
        )
    }
}

export default SideMenu
