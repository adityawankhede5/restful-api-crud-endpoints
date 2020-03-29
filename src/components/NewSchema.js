import React, { Component } from 'react'
import Title from './Title'
import Input from './Input'

export class NewSchema extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ''
        }
    }
    
    getStyle=()=>{
        return {
            // border: '5px solid black',
            // padding: '10px'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <Title text="New Schema" color={this.props.titleColor}/>
                <Input type="text" placeholder="Name" submitNow={this.props.createNewSchema} submit={'Create'} schemaNames={this.props.schemaNames}/>
            </div>
        )
    }
}

export default NewSchema
