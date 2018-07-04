import React from 'react'

export default class BlackPawns extends React.Component{
    constructor(props){
        super()
    }

    clickHandler = () =>{

        this.props.click(this.props.key, this.props.square)
    }

    render(){
        return <div className='chessSquare' onClick={this.clickHandler}>&#9817;</div>
    }
}