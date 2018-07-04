import React from 'react'

export default class Equations extends React.Component{
    constructor(props){
        super(props)
    }



    clickHandler = () =>{
        this.props.equalSign(this.props.key, this.props.equalSign);
    }

    render() {
        return <div className={'tileCalc'} onClick={this.clickHandler}>{this.props.equal}</div>
    }
}