import React, { Component } from 'react'
import RadioBox from './RadioBox';

export class NewPropertyForm extends Component {
    constructor(props) {
        super(props)
        this.types= ['String', 'Number', 'Date', 'Buffer','Boolean','Mixed','ObjectId','Decimal128']
        this.booleans = ['False', 'True']
        this.state = {
            value: '',
            isInvalid: false,
            type: 0,
            required: 0,
            select: 1,
            array: 0,
            default: {
                string: '',
                number: '',
                date: '',
                buffer: '',
                boolean: 2,
                mixed: '',
                objectid: '',
                decimal128: '',
                other: ''
            }
        }
    }
    
    getStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            borderBottom: '2px solid #333333',
            padding: '10px'
        }
    }
    

    getBooleanBoxStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'row'
        }
    }
    getBooleanBoxOptionStyle = (id) => {
        return {
            padding: '3px 10px',
            fontSize: 'small',
            cursor: 'pointer',
            border: '1px solid #333333',
            backgroundColor: this.state.default.boolean===id ? '#333333' : 'white',
            color: this.state.default.boolean===id ? 'white' : 'black'
        }
    }

    setFormState = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    handleChange=(event)=>{
        this.setState({
            value: event.target.value,
            isInvalid: false
        })
    }

    resetForm = () => {
        this.setState({
            value: '',
            isInvalid: false,
            type: 0,
            required: 0,
            select: 1,
            array: 0,
            default: {
                string: '',
                number: '',
                date: '',
                buffer: '',
                boolean: 2,
                mixed: '',
                objectid: '',
                decimal128: '',
                other: ''
            }
        })
    }

    getType = () => {
        if(this.state.array){
            return `[${this.types[this.state.type]}]`
        }
        return this.types[this.state.type]
    }

    getDefaultValue = () => {
        if(this.types[this.state.type]==='Boolean'){
            if(this.state.default.boolean === 2) return '';
            else return this.state.default.boolean ? 'true' : 'false';
        }else if(this.types[this.state.type]==='String' && this.state.default.string !== ''){
            return `"${this.state.default[this.types[this.state.type].toLowerCase()]}"`
        }
        return this.state.default[`${this.types[this.state.type].toLowerCase()}`]
    }
    
    handleSubmit = (event) =>{
        event.preventDefault();
        if(this.state.value==='' || this.props.allPropertyNames.includes(this.state.value)){
            this.setState({
                isInvalid: true
            })
            return;
        }

        const property = {
            name: this.state.value,
            type: this.getType(),
            isRequired: this.state.required ? 'true' : 'false',
            isSelected: this.state.select ? 'true' : 'false',
            defaultValue: this.getDefaultValue(),
        }
        this.props.addNewProperty(property);
        this.resetForm();

    }


    handleDefaultValueChange = (key, event) => {
        const defaults = this.state.default;
        defaults[key] = event.target.value;
        this.setState({
            default: defaults
        })
    }
    
    handleDefaultBooleanValueChange = (opt) => {
        const defaults = this.state.default;
        defaults.boolean = opt;
        this.setState({
            default: defaults
        })
    }

    getBooleanBox = () => {
        return <div style={this.getBooleanBoxStyle()}>
            {['False', 'True', 'None'].map((opt, i)=>{
                return <span style={this.getBooleanBoxOptionStyle(i)} key={i} onClick={()=>{this.handleDefaultBooleanValueChange(i)}}>{opt}</span>
            })}
        </div>
    }

    getDefaultValueForm = () => {
        switch (this.types[this.state.type]) {
            case 'String':
                return <input type='text' placeholder="String" value={this.state.default.string} onChange={(e)=>{this.handleDefaultValueChange('string', e)}} />
            case 'Number': 
                return <input type="number" placeholder="Number" value={this.state.default.number} onChange={(e)=>{this.handleDefaultValueChange('number', e)}} />
            case 'Date':
                return <input type="text" placeholder="JS Date functions" value={this.state.default.date} onChange={(e)=>{this.handleDefaultValueChange('date', e)}}/>
            case 'Buffer':
                return <input type='text' placeholder="Buffer" value={this.state.default.buffer} onChange={(e)=>{this.handleDefaultValueChange('buffer', e)}} />
            case 'Boolean':
                return this.getBooleanBox();
            case 'Mixed':
                return <input type='text' placeholder="Mixed" value={this.state.default.mixed} onChange={(e)=>{this.handleDefaultValueChange('mixed', e)}} />
            case 'ObjectId':
                return <input type='text' placeholder="ObjectId" value={this.state.default.objectid} onChange={(e)=>{this.handleDefaultValueChange('objectid', e)}} />
            case 'Decimal128':
                return <input type='number' placeholder="Decimal128" value={this.state.default.decimal128} onChange={(e)=>{this.handleDefaultValueChange('decimal128', e)}} />
            
            default:
                return <input type='text' placeholder="Any" value={this.state.default.other} onChange={(e)=>{this.handleDefaultValueChange('other', e)}} />
        }
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit} style={this.getStyle()}>
                <div style={{width: '100%'}}>
                <input 
                    type='text' 
                    placeholder='Property Name' 
                    onChange={this.handleChange} 
                    value={this.state.value}
                    style={this.state.isInvalid ? {borderBottom: '1px solid crimson', fontSize: 'large'} : {borderBottom: '1px solid #333333', fontSize: 'large'}} 
                />
                </div>
                <RadioBox selected={this.state.array} title={"Array"} options={this.booleans} setFormState={this.setFormState} stateVar={'array'} />
                <RadioBox selected={this.state.type} title={"Type"} options={this.types} setFormState={this.setFormState} stateVar={'type'} />
                
                <div style={{marginRight: '5px'}}>
                    <div style={{fontSize: 'smaller',fontWeight: 'bold',padding: '2px'}}>Default</div>
                    {this.getDefaultValueForm(this.props.type)}
                </div>

                <RadioBox selected={this.state.required} title={"Required"} options={this.booleans} setFormState={this.setFormState} stateVar={'required'} />
                <RadioBox selected={this.state.select} title={"Select"} options={this.booleans} setFormState={this.setFormState} stateVar={'select'} />
                
                <div style={{width: '100%', textAlign: 'right'}}>
                    <input type="reset" value="Reset" onClick={this.resetForm}/>
                    <input type="submit" value="Add" />
                </div>
            </form>
        )
    }
}

export default NewPropertyForm
