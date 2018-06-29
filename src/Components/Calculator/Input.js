import React from 'react'

export default class Input extends React.Component{

    render(){
        return(
            <div>
                <input value={this.props.numba1}/>
                <label>{this.props.sign} </label>
                <input value={this.props.numba2}/>
                <label value={this.props.total}/>
            </div>
        )
    }

}