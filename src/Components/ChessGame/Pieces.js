import React from 'react'

export default class Squares extends React.Component{
    constructor(props){
        super()
    }

    clickHandler = () =>{
        this.props.click(this.props.square, this.props.position)
    }
    render(){
        return <div onClick={this.clickHandler}>&#9818;</div>
    }
}
