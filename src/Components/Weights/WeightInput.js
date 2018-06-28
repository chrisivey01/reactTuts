import React from 'react'

export default class WeightInput extends React.Component {
    render() {
        return (
            <div>
                <input value={this.props.weightInput} onChange={this.props.inputs}/>
            </div>
        )
    }
}