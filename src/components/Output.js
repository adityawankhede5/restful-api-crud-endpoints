import React, { Component } from 'react'
import SchemaCode from './SchemaCode'
import CreateEP from './CreateEP'
import ReadEp from './ReadEp'
import UpdateEp from './UpdateEp'
import DeleteEp from './DeleteEp'
import Title from './Title'

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
            width: '35%',
            position: 'relative',
            // backgroundColor: '#2b3032',
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
            backgroundColor: 'rgb(21,21,21)',
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

    copyContent = (elids) => {
        let code='';
        elids.forEach((elid,i)=>{
            code += document.getElementById(elid).textContent; 
        });
        const el = document.createElement('textarea');
        el.value = code;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
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
                        changeInView={this.changeInView}
                        />
                    <div>
                    <Title text={'Endpoints'} fontSize={'x-large'} 
                        getCopyButtonStyle={this.getCopyButtonStyle} toCopy={['createone', 'findall', 'findbyid', 'update', 'delete']} copyCallback={this.copyContent}/>
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
                        changeInView={this.changeInView}
                        copyCallback={this.copyContent} 
                        />
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
                        changeInView={this.changeInView}
                        copyCallback={this.copyContent} 
                        />
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
                        changeInView={this.changeInView}
                        copyCallback={this.copyContent} 
                        />
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
                        changeInView={this.changeInView}
                        copyCallback={this.copyContent} 
                        />
                    </div>
                </div>
            </div>

            :

            ''
        )
    }
}

export default Output
