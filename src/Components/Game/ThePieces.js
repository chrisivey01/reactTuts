
import React from 'react'


export default class Pieces extends React.Component {
    constructor(props) {
        super()
        this.state={
            type: String,
            side: String,
            position: String
        }
    }



    piecePosition = (type,side,i) => {
        function selectPiece (piece, position){
            console.log(piece)
            console.log(position)
        }

        for (i = 0; i < 64; i++) {
            let position = this.props.position

            if (this.props.side === "W") {
                switch (this.props.piece) {
                    case "R":
                        return <span onClick={function(){selectPiece('WR', position)}}>&#9814;</span>;
                    case "N":
                        return <span onClick={function(){selectPiece('WN', position)}}>&#9816;</span>;
                    case "B":
                        return <span onClick={function(){selectPiece('WB', position)}}>&#9815;</span>;
                    case "Q":
                        return <span onClick={function(){selectPiece('WQ', position)}}>&#9813;</span>;
                    case "K":
                        return <span onClick={function(){selectPiece('WK', position)}}>&#9812;</span>;
                    case "P":
                        return <span onClick={function(){selectPiece('WP', position)}}>&#9817;</span>;
                    case "":
                        return <span></span>;
                    default:
                }
            } else {
                // Black
                switch (this.props.piece) {
                    case "R":
                        return <span onClick={function(){selectPiece('BR', position)}}>&#9820;</span>;
                    case "N":
                        return <span onClick={function(){selectPiece('BN', position)}}>&#9822;</span>;
                    case "B":
                        return <span onClick={function(){selectPiece('BB', position)}}>&#9821;</span>;
                    case "Q":
                        return <span onClick={function(){selectPiece('BQ', position)}}>&#9819;</span>;
                    case "K":
                        return <span onClick={function(){selectPiece('BK', position)}}>&#9818;</span>;
                    case "P":
                        return <span onClick={function(){selectPiece('BP', position)}}>&#9823;</span>;
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

