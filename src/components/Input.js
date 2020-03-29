import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value: '',
            isInvalid: false
        }
    }

    getStyle=()=>{
        return {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            padding: '15px 5px',
        }
    }
    
    getInputStyle=()=>{
        return {
            padding: '5px',
            border: '0px',
            borderBottom: this.state.isInvalid ? '1px solid crimson' : '1px solid #333333' ,
            // fontWeight: 600,
            width: '100%',
            fontSize: 'large',
            backgroundColor: 'rgba(21,21,21)',
            color: 'white'
        }
    }

    getSubmitButtonStyle=()=>{
        return {
            color: 'white',
            backgroundColor: '#333333',
            border: '0px',
            padding: '10px',
            fontWeight: 'bold',
            margin: '5px',
        }
    }

    handleChange = (event) =>{
        if(this.state.isInvalid === true) {
            this.setState({
                isInvalid: false
            })
        }
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.value==='' || this.props.schemaNames.includes(this.state.value)){
            this.setState({
                isInvalid: true
            })
            return;
        }
        this.props.submitNow(this.state.value);
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <form style={this.getStyle()} onSubmit={this.handleSubmit}>
            <input 
                style={this.getInputStyle()} 
                type={this.props.type} 
                placeholder={this.props.placeholder} 
                value={this.state.value}
                onChange={this.handleChange} 
            />
            <input style={this.getSubmitButtonStyle()} type="submit" value={this.props.submit || 'Submit'} />
            </form>
        )
    }
}

export default Input
