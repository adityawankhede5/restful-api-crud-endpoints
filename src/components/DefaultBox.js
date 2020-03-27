import React, { Component } from 'react'
import RadioBox from './RadioBox'

export class DefaultBox extends Component {

    constructor(props) {
        super(props);
        this.availableTypes = ['Number', 'Date', 'Boolean'];
    
        this.state = {
            number: '',
            date: '',
            boolean: false,
            default: ''
        }
    }
    

    getStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'column',
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
            flexDirection: 'row'
        }
    }

    
    getOptionStyle = (id) => {
        return {
            padding: '3px 10px',
            fontSize: 'small',
            cursor: 'pointer',
            border: '1px solid #333333',
            backgroundColor: this.state.selected===id ? '#333333' : 'white',
            color: this.state.selected===id ? 'white' : 'black'
        }
    }

    setFormState = (key, value)=>{
        this.setState({
            boolean: value
        })
    }

    handleChange = (key, event) => {
        this.setState({
            [key]: event.target.value
        },()=>{
            this.props.setFormState('defaultValue', this.state[this.state.selectedType]);
        })
    }


    getDefaultValueForm = (type) => {
        switch (type) {
            case 'Number': 
                return <input type="number" placeholder="Number" value={this.state.number} onChange={(e)=>{this.handleChange('number', e)}} />
            case 'Date':
                return <input type="text" placeholder="JS Date functions" value={this.state.date} onChange={(e)=>{this.handleChange('date', e)}}/>
            case 'Boolean':
                return <RadioBox multiple={[]} title={''} selected={1} options={['True', 'False']} setFormState={this.setFormState} />
            
            default:
                return <input type='text' value={this.state.default} onChange={(e)=>{this.handleChange('default', e)}} />
        }
    }


    render() {
        return (
            <div style={this.getStyle()}> 
                <div style={this.getTitleStyle()}>{this.props.title}</div>
                <div style={this.getOptionsStyle()}>
                    {this.getDefaultValueForm(this.props.type)}
                </div>        
            </div>
        )
    }
}

export default DefaultBox
