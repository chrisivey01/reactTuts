import React from 'react'
import Box from './V2Chess'
import BlackPawns from './V2Chess'

export default class V2Chess extends React.Component{
    constructor(){
        super()
        this.state={
            board:[[],[]],
            cols : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            rows : [8, 7, 6, 5, 4, 3, 2, 1],
            cells:[]

        }
    }


    makeBoard = () =>{
        // let {board} = this.state
        let cBoard;
        let columns = []
        // Outer loop to create parent
        for (let i = 0; i < 8; i++) {
            let rows = []


            if(i === 0 ){
                for(let i=0; i<8; i++) {
                    rows.push(<td className='chessSquare'></td>)
                }
            }
            //Load Black Pawns
            if(i===1){
                for(let i=0; i<8; i++) {
                    rows.push(<td className='chessSquare'>&#9823;</td>)
                }
            }

            if(i === 2 || i === 3 || i=== 4 || i === 5){
                for(let i=0; i<8; i++) {
                    rows.push(<td className='chessSquare'></td>)
                }
            }


            //Load White Pawns
            if(i===6){
                for(let i=0; i<8; i++) {
                    rows.push(<td className='chessSquare'  onClick={this.move.bind(this,i)}>&#9817;</td>)
                }
            }
            if(i===7){
                for(let i=0; i<8; i++) {
                    rows.push(<td className='chessSquare'></td>)
                }
            }
            columns.push(<tr>{rows}</tr>)
            cBoard = [[columns],[rows]]
        }
        return cBoard
    }

    move = (i,event) =>{
        console.log(event.target.value)
    }


    render(){

        return(
            <div className = "chessboard">
                <table>
                    <tbody>
                    {this.makeBoard()}
                    </tbody>
                </table>
            </div>

        )
    }

        // const {dA} = this.state;
        // const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        // const rows = [8, 7, 6, 5, 4, 3, 2, 1]
        //
        //     // for(let i =0; i<8; i++) {
        //     //     columns.push('A ')
        //     //     rows.push('A ')
        //     // }
        // return <table className="board">
        //     {rows.map((row, rowIndex) =>
        //         <tr className="board-row" key={row}>
        //             <td>{row}</td>
        //             {cols === 2 ?
        //                 <td>
        //                     {cols.map((col, colIndex) =>
        //                         <BlackPawns/>)}
        //                 </td>
        //             }

                    // {/*{cols.map((col, colIndex) =>*/}
                    // {/*<td id={`${col}${row}`} key={col}>{col}</td>*/}
                    //
                    // {/*)}*/}
        //         </tr>
        //
        // </table>
    // }

}