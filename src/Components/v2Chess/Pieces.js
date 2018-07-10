import React from 'react'

export default class Pieces extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            BPawn:String.fromCharCode(9823),
            WPawn:String.fromCharCode(9817)
        }
    }

    piecePosition = () =>{
        if(this.props.index === 1){
            return this.state.BPawn
        }

        if(this.props.index === 6){
            return this.state.WPawn
        }


    }

    render() {

        const {BPawn} = this.state

        return <span>{this.piecePosition()}</span>
    }
}

