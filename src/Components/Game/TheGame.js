import React from 'react'
import ThePieces from './ThePieces'
var chessRules = require('chess-rules');



export default class TheGame extends React.Component {
    constructor(props) {
        super(props)

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

        let {pieces} = this.state
        let importedPieces = (chessRules.getInitialPosition().board);
        // let piecesArray = new Array(8).fill(new Array(8));
        //
        // let k = 0;
        // for (let i = 0; i < 8; i++) {
        //     for (let j = 0; j < 8; j++) {
        //         if(importedPieces && importedPieces[k]){
        //             piecesArray[i][j] = importedPieces[k];
        //         }
        //         else {
        //             piecesArray[i][j] = "";
        //         }
        //         k++;
        //     }
        // }
        //
        // console.log(piecesArray)
        //
        // pieces = {...importedPieces}
    }

    evenCheck = (num) => {
        return num % 2 == 0
    }

    render() {
        const {pieces} = this.state


        let board = []
        for(let i =0; i <8; i++){
            let row = [];
            for(let j=0; j<8; j++){
                row.push(<td className={this.evenCheck(i) &&  this.evenCheck(j)||
                (!this.evenCheck(i) && !this.evenCheck(j)) ?  'light-square' : 'dark-square'}
                >
                    {/*<ThePieces {...pieces} index={i}/>*/}
                </td>)
            }
            board.push(<tr>{row}</tr>)

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