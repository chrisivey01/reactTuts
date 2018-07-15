import React from 'react'
import Pieces from './Pieces'
var chessRules = require('chess-rules');

let move;
let newMove;
export default class V2Chess extends React.Component{
    constructor(){
        super()
        this.state={
            gboard:[{
                    type:[],
                    side:[],
                    clicked:false
            }],
            turn:'W',
        }

    }

    componentWillMount(){
        let game = {}
        let chessPieces = []
        let pieces = (chessRules.getInitialPosition().board);
        let stateBoard = {...this.state.gboard}

        for(let i=0; i<pieces.length;i++){

            if(pieces[i] != null){
                chessPieces.push(pieces[i].type)

            }else {
                chessPieces.push('')
            }

        }


        stateBoard[0].type = [...chessPieces]
        this.setState({
            gboard:stateBoard
        })

        // let board = []
        // for(let i =0; i <8; i++){
        //     let row = [];
        //     for(let j=0; j<8; j++){
        //         row.push(<td className={this.evenCheck(i) &&  this.evenCheck(j)||
        //         (!this.evenCheck(i) && !this.evenCheck(j)) ?  'light-square' : 'dark-square'}
        //                      onClick={this.move.bind(this,j,board)}>
        //             <Pieces index={i}/>
        //         </td>)
        //     }
        //     board.push(<tr>{row}</tr>)


    }
    evenCheck = (num) =>{
        return num % 2 === 0
    }
    move = (j,board, event ) =>{
        let piece = event.target
        let game = {}


        console.log(chessRules.getInitialPosition())
        this.setState({board:board})

        game[board] = board;
        console.log(game);

    }

    render(){

return(
    {
            <table className = "chessboard">
                <tbody>
                <tr>
                    <th></th>
                    <th>a</th>
                    <th>b</th>
                    <th>c</th>
                    <th>d</th>
                    <th>e</th>
                    <th>f</th>
                    <th>g</th>
                    <th>h</th>
                    <th></th>
                </tr>
                <tr>
                    {
                    this.state.gboard[0].type.map((object,i) =>{
                        return <Pieces piece={object} side={'W'} index={i}/>
                    })}
                </tr>
                <tr>
                    <th></th>
                    <th>a</th>
                    <th>b</th>
                    <th>c</th>
                    <th>d</th>
                    <th>e</th>
                    <th>f</th>
                    <th>g</th>
                    <th>h</th>
                    <th></th>
                </tr>
                </tbody>
            </table>
        )
    }
}