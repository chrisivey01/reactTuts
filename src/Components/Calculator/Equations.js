import React from 'react'


export default class Equations extends React.Component{
    constructor(props){
        super()
    }



    clickHandler = () =>{
        this.props.eq(this.props.key, this.props.equations);
    }

    render() {
        return <div className={'tileCalc'} onClick={this.clickHandler}>{this.props.equations}</div>

    }
}