import React, { Component } from 'react'
import SideMenu from './SideMenu'
import Main from './Main'
import Output from './Output'

export class Body extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selecetedSchema: -1,
            allSchemas: []
        }
    }
    
    getStyle = () => {
        return {
            flexGrow: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
        }
    }

    createNewSchema = (schemaname) => {
        const allSchemas = this.state.allSchemas;
        allSchemas.push({name: schemaname, properties: []});
        this.setState({
            allSchemas: allSchemas,
            selecetedSchema: allSchemas.length-1
        });
    }

    selectSchema = (id) => {
        // console.log("Selected Schema: ", this.state.allSchemas[id]);
        this.setState({
            selecetedSchema: id
        })
    }

    deleteSchema = () => {
        const allSchemas = this.state.allSchemas;
        allSchemas.splice(this.state.selecetedSchema, 1);
        this.setState({
            selecetedSchema: this.state.selecetedSchema-1,
            allSchemas
        })
    }

    addNewProperty = (property) => {
        const allSchemas = this.state.allSchemas;
        allSchemas[this.state.selecetedSchema].properties.push(property);
        this.setState({
            allSchemas
        })
    }

    deleteProperty = (index) => {
        const allSchemas = this.state.allSchemas;
        allSchemas[this.state.selecetedSchema].properties.splice(index, 1);
        this.setState({
            allSchemas
        })
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <SideMenu allSchemas={this.state.allSchemas} selectSchema={this.selectSchema} createNewSchema={this.createNewSchema}/>
                <Main schema={this.state.allSchemas[this.state.selecetedSchema]} deleteSchema={this.deleteSchema} addNewProperty={this.addNewProperty} deleteProperty={this.deleteProperty} />
                <Output schema={this.state.allSchemas[this.state.selecetedSchema]} />
            </div>
        )
    }
}

export default Body
