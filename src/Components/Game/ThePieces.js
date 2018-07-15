
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
        function selectPiece (piece){
            console.log(piece)
        }

        for (i = 0; i < 64; i++) {
            if (this.props.side === "W") {
                switch (this.props.piece) {
                    case "R":
                        return <span onClick={function(){selectPiece('WR')}}>&#9814;</span>;
                    case "N":
                        return <span onClick={function(){selectPiece('WN')}}>&#9816;</span>;
                    case "B":
                        return <span onClick={function(){selectPiece('WB')}}>&#9815;</span>;
                    case "Q":
                        return <span onClick={function(){selectPiece('WQ')}}>&#9813;</span>;
                    case "K":
                        return <span onClick={function(){selectPiece('WK')}}>&#9812;</span>;
                    case "P":
                        return <span onClick={function(){selectPiece('WP')}}>&#9817;</span>;
                    case "":
                        return <span></span>;
                    default:
                }
            } else {
                // Black
                switch (this.props.piece) {
                    case "R":
                        return <span onClick={function(){selectPiece('BR')}}>&#9820;</span>;
                    case "N":
                        return <span onClick={function(){selectPiece('BN')}}>&#9822;</span>;
                    case "B":
                        return <span onClick={function(){selectPiece('BB')}}>&#9821;</span>;
                    case "Q":
                        return <span onClick={function(){selectPiece('BQ')}}>&#9819;</span>;
                    case "K":
                        return <span onClick={function(){selectPiece('BK')}}>&#9818;</span>;
                    case "P":
                        return <span onClick={function(){selectPiece('BP')}}>&#9823;</span>;
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

