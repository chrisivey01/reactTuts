import React from 'react'

export default class Total extends React.Component{
    constructor(props){
        super()
    }



    clickHandler = () =>{
        this.props.math(this.props.key, this.props.number);
    }

    render() {
        return <div className={'tileCalc'} onClick={this.clickHandler}>{this.props.number}</div>
    }
}