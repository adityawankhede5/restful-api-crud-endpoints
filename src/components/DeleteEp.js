import React, { Component } from 'react'
import Title from './Title'

export class DeleteEp extends Component {

    getDeleteCode = ()=>{
        const nameLowercase = this.props.schema.name.toLowerCase();
        const nameCaptialized = this.props.capitalize(this.props.schema.name);
        return (
`// Delete Endpoint.
app.delete('/api/v1/${nameLowercase}/:${nameLowercase}Id', (req, res)=>{

    ${nameCaptialized}.findByIdAndRemove(req.params.${nameLowercase}Id)  //Returns the updated document.
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
            message: "${nameCaptialized} deleted successfully!",
            data: {
                ${nameLowercase}: ${nameLowercase},
            }
        })
    })
    .catch((err)=>{
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            res.status(404).json({
                resolved: "failure",
                message: "${nameCaptialized} not found with id " + req.params.${nameLowercase}Id,
                error: err,
            })
            return;
        }
        res.status(500).json({
            resolved: "failure",
            message: "Error deleting ${nameLowercase} with id " + req.params.${nameLowercase}Id,
            error: err, 
        });
    });
});\n
`
        )
    }

    render() {
        return (
            <div style={this.props.style} onClick={()=>{this.props.changeInView(4)}}>
                <Title text={'Delete Endpoint'} getCopyButtonStyle={this.props.getCopyButtonStyle}  toCopy={['delete']} copyCallback={this.props.copyContent} />
                <div style={this.props.getContentStyle(4)} >
                    <div style={this.props.getSubEndpointStyle()}>
                        <div style={this.props.getHeaderStyle()}>
                            <div style={this.props.getEpNameStyle()}>Delete</div>
                            <div style={this.props.getEpDescriptionStyle()}></div>
                            <span style={this.props.getCopyButtonStyle()} onClick={()=>{this.props.copyContent(['delete'])}}>Copy</span>
                        </div>
                        <textarea wrap="off" readOnly='readonly' value={this.getDeleteCode()} id='delete'></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteEp
