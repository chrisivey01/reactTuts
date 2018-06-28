import React from 'react'

export default class Pieces extends React.Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <span onClick={this.props.try}>
                &nbsp;
                {this.props.pieces.xPiece}
                {this.props.pieces.oPiece}
                &nbsp;
            </span>
        )
    }
}