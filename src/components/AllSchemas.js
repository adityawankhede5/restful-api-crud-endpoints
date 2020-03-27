import React, { Component } from 'react'
import Title from './Title'
import SchemaBrief from './SchemaBrief'

export class AllSchemas extends Component {
    getStyle = () => {
        return {
            // border: '5px solid black',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }
    }

    getAllSchemasContainerStyle = () => {
        return {
            // border: '5px solid crimson',
            position: 'relative',
            height: '100%'
        }
    }

    getAllSchemasScrollableContainerStyle = () => {
        return {
            // border: '5px solid purple',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: 'auto'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <Title text={'All Schemas'}/>
                <div style={this.getAllSchemasContainerStyle()}>
                    <div style={this.getAllSchemasScrollableContainerStyle()}>
                        {this.props.allSchemas.map((schema, i)=>{
                            return <SchemaBrief schema={schema} index={i} key={i} selectSchema={this.props.selectSchema}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default AllSchemas
