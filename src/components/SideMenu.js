import React, { Component } from 'react'
import NewSchema from './NewSchema'
import AllSchemas from './AllSchemas'
import Header from './Header'

export class SideMenu extends Component {
    getStyle = () => {
        return {
            // border: '5px solid crimson',
            height: '100%',
            width: '15%',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            paddingBottom: '0px',
            backgroundColor: 'rgba(21,21,21)',
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
                <Header />
                <NewSchema createNewSchema={this.props.createNewSchema} schemaNames={this.getSchemaNamesArray()} titleColor={'white'}/>
                <AllSchemas allSchemas={this.props.allSchemas} selectedSchema={this.props.selectedSchema} selectSchema={this.props.selectSchema} titleColor={'white'}/>
            </div>
        )
    }
}

export default SideMenu
