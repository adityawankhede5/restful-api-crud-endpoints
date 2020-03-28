import React, { Component } from 'react';
import Title from './Title';



export class CreateEP extends Component {

    getProperty = (property, schemaName) => {
        const name = property.name;
        const type = property.type;
        const required = property.isRequired==='true' ? 'Required.' : 'Not Required';
        const select = property.isSelected==='true' ? 'Selected' : 'Not Selected';
        const defaultValue = property.defaultValue ? `default=${property.defaultValue}.` : '';

        return `\t\t\t${name}: req.body.${schemaName.toLowerCase()}.${name}, //${type}. ${defaultValue} ${required}. ${select}.\n`
    }

    getAllProperties = () => {
        const properties = this.props.schema.properties.map((property, i)=>{
            return this.getProperty(property, this.props.schema.name);
        });
        let code = '';
        properties.forEach((property)=>{
            code += property;
        })
        return code
    }

    getCreateOneCode = ()=>{
        const nameLowercase = this.props.schema.name.toLowerCase();
        const nameCaptialized = this.props.capitalize(this.props.schema.name);
        return (
`app.post('/api/v1/${nameLowercase}/new', (req, res)=>{

    if(!req.body.${nameLowercase}){
        res.status(400).json({
            resolved: "failure",
            message: 'req.body.${nameLowercase} can not be empty',
        });
        return;
    }
        
    const ${nameLowercase} = new ${nameCaptialized}({
${this.getAllProperties()}
    });

    ${nameLowercase}.save()
    .then((${nameLowercase})=>{
        res.status(201).json({
            resolved: "success",
            data: {
                ${nameLowercase}: ${nameLowercase},
            }
        });
    })
    .catch((err)=>{
        res.status(409).json({
            resolved: "failure",
            message: "Maybe because data already exists.",
            error: err
        });
    });

});
`
        )
    }

    render() {
        return (
            <div style={this.props.style} onClick={()=>{this.props.changeInView(1)}}>
                <Title text={'Create Endpoint'} />
                <div style={this.props.getContentStyle(1)}>
                    <div style={this.props.getSubEndpointStyle()}>
                        <div style={this.props.getHeaderStyle()}>
                            <div style={this.props.getEpNameStyle()}>Create One</div>
                            <div style={this.props.getEpDescriptionStyle()}></div>
                            <span style={this.props.getCopyButtonStyle()} onClick={()=>{this.props.copyContent('createone')}}>Copy</span>
                        </div>
                        <textarea wrap="off" readOnly='readonly' value={this.getCreateOneCode()} id='createone'></textarea>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default CreateEP
