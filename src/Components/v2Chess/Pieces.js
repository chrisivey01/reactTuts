import React from 'react'
var chessRules = require('chess-rules');


export default class Pieces extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            BPawn:String.fromCharCode(9823),
            WPawn:String.fromCharCode(9817),
        }
    }

    piecePosition = (piece,side) => {

        if (side === "W") {
            switch (piece) {
                case "R":
                    return <td>&#9814;</td>;
                case "N":
                    return <td>&#9816;</td>;
                case "B":
                    return <td>&#9815;</td>;
                case "Q":
                    return <td>&#9813;</td>;
                case "K":
                    return <td>&#9812;</td>;
                case "P":
                    return <td>&#9817;</td>;
                case "":
                    return <td></td>;
            }
        } else {
            // Black
            switch (piece) {
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

    render() {
        return <span>{this.piecePosition(this.props.piece,this.props.side)}</span>
    }
}

