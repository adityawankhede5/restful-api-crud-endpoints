import React, { Component } from 'react'

export class RadioBox extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selected: this.props.selected,
            // isMultSelected: false
        }
    }
    
    
    getStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'column',
            margin: '5px'
        }
    }

    getTitleStyle = () => {
        return {
            fontSize: 'smaller',
            fontWeight: 'bold',
            padding: '2px'
        }
    }

    getOptionsStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }
    }
    getOptionStyle = (id) => {
        return {
            padding: '5px 15px',
            fontSize: 'small',
            cursor: 'pointer',
            // border: '1px solid rgba(21,21,21)',
            backgroundColor: this.props.selected===id ? '#26ae60' : 'rgba(21,21,21)',
            // color: this.props.selected===id ? 'white' : 'black',
            color: 'white',
        }
    }

    selectOption = (key,id) => {
        this.props.setFormState(key, id);
    }
    
    render() {
        return (
            <div style={this.getStyle()}> 
                <div style={this.getTitleStyle()}>{this.props.title}</div>
                <div style={this.getOptionsStyle()}>
                    {this.props.options.map((option,i)=>{
                        return <span style={this.getOptionStyle(i)} key={i} onClick={()=>{this.selectOption(this.props.stateVar,i)}}>{option}</span>
                    })}    
                </div>        
            </div>
        )
    }
}

export default RadioBox
