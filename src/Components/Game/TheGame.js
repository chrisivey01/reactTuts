import React from 'react'
// import ThePieces from "./ThePieces";

var chessRules = require('chess-rules');


export default class TheGame extends React.Component {
    piecesArray

    constructor(props) {
        super()

        this.state = {
            pieces: [
                {
                    type: '',
                    side: ''
                }
            ]

        }
    }

    componentWillMount() {
        let importedPieces = (chessRules.getInitialPosition().board)
        this.piecesArray = []
        let k = 0

        for (let i = 0; i < 8; i++) {
            let newRow = []
            for (let j = 0; j < 8; j++) {
                if(importedPieces[k]){
                    newRow.push(importedPieces[k])
                }else{
                    newRow.push({type:"", side:""})
                }
                k++
            }
            this.piecesArray.push(newRow)
        }
        this.forceUpdate()
    }

    evenCheck = (num) => {
        return num % 2 === 0
    }

    render() {
        // const {pieces} = this.state

        // console.log(this.piecesArray)

        let board = []
        for (let i = 0; i < 8; i++) {
            let row = [];

            for (let j = 0; j < 8; j++) {
                // console.log(this.piecesArray[i][j].type)
                row.push(
                    <td key={j} className={(this.evenCheck(i) && this.evenCheck(j)) || (!this.evenCheck(i) && !this.evenCheck(j)) ? 'light-square' : 'dark-square'}>
                        {this.piecesArray[i][j].type + this.piecesArray[i][j].side}
                    </td>)
            }
            // console.log(row)
            board.push(<tr key={i}>{row}</tr>)
        }
        return (
            <table>
                <tbody>
                {board}
                </tbody>
            </table>
        )
    }

}