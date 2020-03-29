import React, { Component } from 'react'
import Title from './Title'

export class ReadEp extends Component {

    getFindAllCode = ()=>{
        const nameLowercase = this.props.schema.name.toLowerCase();
        const nameCaptialized = this.props.capitalize(this.props.schema.name);
        return (
`// Find All Endpoint.
app.get('/api/v1/${nameLowercase}s', (req, res)=>{

    ${nameCaptialized}.find()   //Returns an array.
    .then((${nameLowercase}s)=>{
        res.status(200).json({
            resolved: "success",
            data: {
                ${nameLowercase}s: ${nameLowercase}s,
            },
        });
    })
    .catch((err)=>{
        res.stats(500).json({
            resolved: "failure",
            message: "Some error occurred while retrieving ${nameCaptialized}s.",
            error: err,
        });
    });
});\n
`
        )
    }

    getFindByIdCode = ()=>{
        const nameLowercase = this.props.schema.name.toLowerCase();
        const nameCaptialized = this.props.capitalize(this.props.schema.name);
        return (
`// Find By Id Endpoint.
app.get('/api/v1/${nameLowercase}/:${nameLowercase}Id', (req, res)=>{

    ${nameCaptialized}.findById(req.params.${nameLowercase}Id)  //Returns single document.
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
            message: "Error retreiving ${nameLowercase} with id " + req.params.${nameLowercase}Id,
            error: err, 
        });
    });
});\n
`
        )
    }

    render() {
        return (
            <div style={this.props.style} onClick={()=>{this.props.changeInView(2)}}>
                <Title text={'Read Endpoint'} getCopyButtonStyle={this.props.getCopyButtonStyle} toCopy={['findall', 'findbyid']} copyCallback={this.props.copyContent}/>
                <div style={this.props.getContentStyle(2)}  >
                    <div style={this.props.getSubEndpointStyle()}>
                        <div style={this.props.getHeaderStyle()}>
                            <div style={this.props.getEpNameStyle()}>Find All</div>
                            <div style={this.props.getEpDescriptionStyle()}></div>
                            <span style={this.props.getCopyButtonStyle()} onClick={()=>{this.props.copyContent(['findall'])}}>Copy</span>
                        </div>
                        <textarea wrap="off" readOnly='readonly' value={this.getFindAllCode()} id='findall'></textarea>
                    </div>
                    <div style={this.props.getSubEndpointStyle()}>
                        <div style={this.props.getHeaderStyle()}>
                            <div style={this.props.getEpNameStyle()}>Find By Id</div>
                            <div style={this.props.getEpDescriptionStyle()}></div>
                            <span style={this.props.getCopyButtonStyle()} onClick={()=>{this.props.copyContent(['findbyid'])}}>Copy</span>
                        </div>
                        <textarea wrap="off" readOnly='readonly' value={this.getFindByIdCode()} id='findbyid'></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReadEp
