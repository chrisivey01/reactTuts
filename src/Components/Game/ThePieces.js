
import React from 'react'
var chessRules = require('chess-rules');


export default class Pieces extends React.Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    piecePosition = (type,side,i) => {

        for (i = 0; i < 64; i++) {
            if (this.props[i].side === "W") {
                switch (this.props[i].type) {
                    case "R":
                        return <span>&#9814;</span>;
                    case "N":
                        return <span>&#9816;</span>;
                    case "B":
                        return <span>&#9815;</span>;
                    case "Q":
                        return <span>&#9813;</span>;
                    case "K":
                        return <span>&#9812;</span>;
                    case "P":
                        return <span>&#9817;</span>;
                    case "":
                        return <span></span>;
                }
            } else {
                // Black
                switch (this.props[i].type) {
                    case "R":
                        return "&#9820;";
                    case "N":
                        return "&#9822;";
                    case "B":
                        return "&#9821;";
                    case "Q":
                        return "&#9819;";
                    case "K":
                        return "&#9818;";
                    case "P":
                        return "&#9823;";
                }
            }
        }
    }
    render() {


        const {BPawn} = this.state

        return <span>{this.piecePosition(this.props.type,this.props.side, this.props.i)}</span>
    }
}

