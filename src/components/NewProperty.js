import React, { Component } from 'react'
import NewPropertyForm from './NewPropertyForm'

export class NewProperty extends Component {
    getStyle = () => {
        return {
            border: '5px solid crimson',
            padding: '5px'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <NewPropertyForm />

            </div>
        )
    }
}

export default NewProperty
