import React, { Component } from 'react';
import Title from './Title';

export class SchemaCode extends Component {

    getPropertyCode = (p) =>{
        const opening = `\t${p.name}: {\n`
        const type = `\t\ttype: ${p.type},\n`;
        const required = `\t\trequired: ${p.isRequired},\n`;
        const select = `\t\tselect: ${p.isSelected},\n`
        const defaultValue = p.defaultValue ? `\t\tdefault: ${p.defaultValue},\n` : ``;
        const closing = `\t},\n`
        const code = opening+type+required+select+defaultValue+closing;

        return code;
    }

    getAllPropertiesCodes = () => {
        console.log('Getting all Properties')
        const allProperties = this.props.schema.properties.map((property)=>{
            return this.getPropertyCode(property);
        })
        console.log(allProperties);
        let code='';
        allProperties.forEach(property=>{
            code += property
        })
        return `${code}`
    }

    getSchemaCode = ()=>{
        return (
`const mongoose = require('mongoose');
const Schema = mongoose.Schema;\n
const ${this.props.schema.name}Schema = new Schema({
${this.getAllPropertiesCodes()}});\n
module.exports = mongoose.model('${this.props.capitalize(this.props.schema.name)}', ${this.props.schema.name}Schema);\n
`
        )
    }

    render() {
        return (
            <div onClick={()=>{this.props.changeInView(0)}} >
                <Title text={'Schema Code'} getCopyButtonStyle={this.props.getCopyButtonStyle} />
                <div style={this.props.getContentStyle(0)} >
                    <span style={this.props.getCopyButtonStyle()} onClick={()=>{this.props.copyContent(['schema'])}}>Copy</span>
                    <textarea wrap="off" readOnly='readonly' value={this.getSchemaCode()} id='schema'>
                    </textarea>
                    
                </div>
            </div>
        )
    }
}

export default SchemaCode
