import React from 'react'
import Pieces from './Pieces'

let move;
let newMove;
export default class V2Chess extends React.Component{
    constructor(){
        super()
        this.state={
            board:[[],[]],
        }

    }

    evenCheck = (num) =>{
        return num % 2 === 0
    }
    move = (j,board, event ) =>{
        let piece = event.target

        this.setState({board:board})

        console.log(board[j].props)
        if(move === undefined) {
            move = piece;

            //move.splice(i, 1, piece)
        }else{
            newMove = event.target
            newMove.innerHTML = move.innerHTML;
            move.innerHTML = "";
            move = undefined;
        }
    }

    render(){

        let board = []
        for(let i =0; i <8; i++){
            let row = [];
            for(let j=0; j<8; j++){
                row.push(<td key={j} className={(this.evenCheck(i) &&  this.evenCheck(j))||
                (!this.evenCheck(i) && !this.evenCheck(j)) ?  'light-square' : 'dark-square'}
                onClick={this.move.bind(this,j,board)}>
                    <Pieces index={i}/>
                </td>)
            }
            board.push(<tr key={i}>{row}</tr>)
        }
        
        return(
            <table className = "chessboard">
                <tbody>
                    {board}
                </tbody>
            </table>
        )
    }
}