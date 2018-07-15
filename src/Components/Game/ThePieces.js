
import React from 'react'


export default class Pieces extends React.Component {
    constructor(props) {
        super()
        this.state={
            type: String,
            side: String
        }
    }

    piecePosition = (type,side,i) => {

        for (i = 0; i < 64; i++) {
            if (this.props.side === "W") {
                switch (this.props.piece) {
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
                    default:
                }
            } else {
                // Black
                switch (this.props.piece) {
                    case "R":
                        return <span>&#9820;</span>;
                    case "N":
                        return <span>&#9822;</span>;
                    case "B":
                        return <span>&#9821;</span>;
                    case "Q":
                        return <span>&#9819;</span>;
                    case "K":
                        return <span>&#9818;</span>;
                    case "P":
                        return <span>&#9823;</span>;
                     default:
                }
            }
        }
    }
    render() {


        const {BPawn} = this.state

        return <span>{this.piecePosition(this.props.type,this.props.side, this.props.i)}</span>
    }
}

