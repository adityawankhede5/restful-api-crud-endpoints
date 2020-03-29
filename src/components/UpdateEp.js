import React, { Component } from 'react'
import Title from './Title'

export class UpdateEp extends Component {


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

    getUpdateCode = ()=>{
        const nameLowercase = this.props.schema.name.toLowerCase();
        const nameCaptialized = this.props.capitalize(this.props.schema.name);
        return (
`// Update Endpoint.
app.put('/api/v1/${nameLowercase}/:${nameLowercase}Id', (req, res)=>{

    if(!req.body.${nameLowercase}){
        res.status(400).json({
            resolved: "failure",
            message: "req.body.${nameLowercase} can not be empty.",
        })
    }

    ${nameCaptialized}.findByIdAndUpdate(req.params.${nameLowercase}Id, {
${this.getAllProperties()}
    }, {new: true})  //Returns the updated document.
    .then((${nameLowercase})=>{
        if(!${nameLowercase}){
            res.status(404).json({
                resolved: "success",
                message: "${nameCaptialized} not found with id " + req.params.${nameLowercase}Id,
            });
            return;
        }
        res.status(200).json({
            resolved: "success",
            data: {
                ${nameLowercase}: ${nameLowercase},
            }
        })
    })
    .catch((err)=>{
        if(err.kind === 'ObjectId') {
            res.status(404).json({
                resolved: "failure",
                message: "${nameCaptialized} not found with id " + req.params.${nameLowercase}Id,
                error: err,
            })
            return;
        }
        res.status(500).json({
            resolved: "failure",
            message: "Error updating ${nameLowercase} with id " + req.params.${nameLowercase}Id,
            error: err, 
        });
    });
});\n
`
        )
    }

    render() {
        return (
            <div style={this.props.style} onClick={()=>{this.props.changeInView(3)}}>
                <Title text={'Update Endpoint'} getCopyButtonStyle={this.props.getCopyButtonStyle} toCopy={['update']} copyCallback={this.props.copyContent} />
                <div style={this.props.getContentStyle(3)} >
                    <div style={this.props.getSubEndpointStyle()}>
                        <div style={this.props.getHeaderStyle()}>
                            <div style={this.props.getEpNameStyle()}>Update</div>
                            <div style={this.props.getEpDescriptionStyle()}></div>
                            <span style={this.props.getCopyButtonStyle()} onClick={()=>{this.props.copyContent(['update'])}}>Copy</span>
                        </div>
                        <textarea wrap="off" readOnly='readonly' value={this.getUpdateCode()} id='update'></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateEp
