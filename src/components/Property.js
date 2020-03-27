import React, { Component } from 'react'

export class Property extends Component {
    getStyle = () => {
        return {
            border: '5px solid cadeblue',
            padding: '10px',
            borderBottom: '1px solid lightgrey',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }
    }
    getKeyValueStyle = () => {
        return {
            fontSize: 'small',
            color: 'grey',
            margin: '2px',
            fontWeight: 'bold'
        }
    }

    getControlIconStyle = () => {
        return {
            fontSize: '1em',
            border: '1px solid lightgrey',
            padding: '2px',
            margin: '2px',
            cursor: 'pointer',
            color: 'crimson'
        }
    }

    ControlIcon = (props) => {
        return <i className="material-icons" style={this.getControlIconStyle()} onClick={()=>{props.action(props.index)}} >{props.name}</i>
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <this.ControlIcon name={'delete'} action={this.props.deleteProperty} index={this.props.index}/>
                <span style={{fontSize: 'large',fontWeight: 'bold', margin: '3px'}}>{this.props.property.name}</span>
                <span style={this.getKeyValueStyle()}>type: {this.props.property.isArray ? `[${this.props.property.type}]`: `${this.props.property.type}`},</span>
                {this.props.property.defaultValue ? <span style={this.getKeyValueStyle()}>defalut: {this.props.property.defaultValue},</span> : ''}
                <span style={this.getKeyValueStyle()}>required: {this.props.property.isRequired.toString()},</span>
                <span style={this.getKeyValueStyle()}>select: {this.props.property.isSelected.toString()}</span>
                
            </div>
        )
    }
}

export default Property
