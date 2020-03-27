import React, { Component } from 'react'
import Property from './Property'
import NewPropertyForm from './NewPropertyForm'

export class Properties extends Component {

    getStyle = () => {
        return {
            // border: '5px solid cadetblue',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
        }
    }
    getScrollableStyle = () => {
        return {
            // border: '5px solid purple',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: 'auto',

        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <NewPropertyForm addNewProperty={this.props.addNewProperty} allPropertyNames={this.props.schema.properties.map((p)=>{return p.name})}/>
                <div style={{position: 'relative', flexGrow: 1}}>
                <div style={this.getScrollableStyle()}>
                    
                    {this.props.schema.properties.map((property, i)=>{
                        return <Property property={property} key={i} index={i} deleteProperty={this.props.deleteProperty} />
                    })}
                </div>
                </div>
            </div>
        )
    }
}

export default Properties
