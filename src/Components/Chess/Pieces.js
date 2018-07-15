import React from 'react'

export default class Pieces extends React.Component{
    constructor(props){
        super()
    }



    clickHandler = () =>{
        this.props.tileClick(this.props.key, this.props.turn);
    }

    render() {
        return <div className={this.props.status === '' ? 'tile' : 'tile status-' + this.props.status} onClick={this.clickHandler}>{this.props.status}</div>
    }
}