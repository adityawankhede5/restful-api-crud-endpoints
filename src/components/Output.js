import React, { Component } from 'react'
import SchemaCode from './SchemaCode'
import CreateEP from './CreateEP'
import ReadEp from './ReadEp'
import UpdateEp from './UpdateEp'
import DeleteEp from './DeleteEp'

export class Output extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inView: 0
        }
    }
    
    changeInView = (inView)=>{
        this.setState({
            inView
        })
    }

    getStyle = () => {
        return {
            // border: '5px solid crimson',
            height: '100%',
            width: '30%',
            position: 'relative'
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
            padding: '10px',
            paddingBottom: '0px',
        }
    }

    getContentStyle = (index) => {
        return {
            padding: '5px',
            display: this.state.inView===index ? 'block' : 'none',
        }
    }

    getSubEndpointStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'column'
        }
    }

    getHeaderStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '3px',
        }
    }

    getEpNameStyle = () => {
        return {
            fontSize: '',
            fontWeight: 600,
        }
    }

    getEpDescriptionStyle = () => {
        return {
            fontSize: 'small',
            fontWeight: 'bold',
            color: 'lightgrey',
            flexGrow: 1
        }
    }

    getCopyButtonStyle = () => {
        return {
            backgroundColor: '#333333',
            color: 'white',
            fontSize: 'small',
            padding: '5px',
            cursor: 'pointer',
            float: 'right'
        }
    }

    capitalize = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    copyContent = (elid) => {
        const el = document.getElementById(elid);
        el.select();
        document.execCommand('copy');
    }

    render() {
        return (
            this.props.schema ? 
            <div style={this.getStyle()}>
                <div style={this.getScrollableStyle()}>
                    <SchemaCode 
                        schema={this.props.schema}  
                        getContentStyle={this.getContentStyle} 
                        getSubEndpointStyle={this.getSubEndpointStyle} 
                        getHeaderStyle={this.getHeaderStyle}
                        getEpNameStyle={this.getEpNameStyle}
                        getEpDescriptionStyle={this.getEpDescriptionStyle}
                        getCopyButtonStyle={this.getCopyButtonStyle}
                        capitalize={this.capitalize}
                        copyContent={this.copyContent}
                        changeInView={this.changeInView} />
                    <CreateEP 
                        schema={this.props.schema}  
                        getContentStyle={this.getContentStyle} 
                        getSubEndpointStyle={this.getSubEndpointStyle} 
                        getHeaderStyle={this.getHeaderStyle}
                        getEpNameStyle={this.getEpNameStyle}
                        getEpDescriptionStyle={this.getEpDescriptionStyle}
                        getCopyButtonStyle={this.getCopyButtonStyle}
                        capitalize={this.capitalize}
                        copyContent={this.copyContent}
                        changeInView={this.changeInView} />
                    <ReadEp 
                        schema={this.props.schema}  
                        getContentStyle={this.getContentStyle} 
                        getSubEndpointStyle={this.getSubEndpointStyle} 
                        getHeaderStyle={this.getHeaderStyle}
                        getEpNameStyle={this.getEpNameStyle}
                        getEpDescriptionStyle={this.getEpDescriptionStyle}
                        getCopyButtonStyle={this.getCopyButtonStyle}
                        capitalize={this.capitalize}
                        copyContent={this.copyContent}
                        changeInView={this.changeInView} />
                    <UpdateEp 
                        schema={this.props.schema}  
                        getContentStyle={this.getContentStyle} 
                        getSubEndpointStyle={this.getSubEndpointStyle} 
                        getHeaderStyle={this.getHeaderStyle}
                        getEpNameStyle={this.getEpNameStyle}
                        getEpDescriptionStyle={this.getEpDescriptionStyle}
                        getCopyButtonStyle={this.getCopyButtonStyle}
                        capitalize={this.capitalize}
                        copyContent={this.copyContent}
                        changeInView={this.changeInView} />
                    <DeleteEp 
                        schema={this.props.schema}  
                        getContentStyle={this.getContentStyle} 
                        getSubEndpointStyle={this.getSubEndpointStyle} 
                        getHeaderStyle={this.getHeaderStyle}
                        getEpNameStyle={this.getEpNameStyle}
                        getEpDescriptionStyle={this.getEpDescriptionStyle}
                        getCopyButtonStyle={this.getCopyButtonStyle}
                        capitalize={this.capitalize}
                        copyContent={this.copyContent}
                        changeInView={this.changeInView} />
                </div>
            </div>

            :

            ''
        )
    }
}

export default Output
