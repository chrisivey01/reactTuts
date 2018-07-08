import React from 'react'

let move;
let newMove;
export default class V2Chess extends React.Component{
    constructor(){
        super()
        this.state={
            board:[[],[]],
            cBoard : [],
            rows : [8, 7, 6, 5, 4, 3, 2, 1],
            cells:[]

        }

    }
    move = (i,rows, event ) =>{
        let b;
        let piece = event.target

        console.log(rows[i].props)
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

        let rows = [];
        // Outer loop to create parent
        for (let i = 0; i < 8; i++) {

            // if(i % 2 )
            let row = [];
            if(i === 0 ){
                row = [];
                for(let i=0; i<8; i++) {
                    row.push(<td className={i % 2 ? 'light-square' : 'dark-square'}></td>)
                }
                rows.push(<tr>{row}</tr>);
            }
            //Load Black Pawns
            if(i===1){
                row = [];
                for(let i=0; i<8; i++) {
                    row.push(<td className={i % 2 ? 'dark-square': 'light-square' } onClick={this.move.bind(this,i,row)}>&#9823;</td>)
                }
                rows.push(<tr>{row}</tr>);
            }

            if(i === 2 ){
                row = [];

                for(let i=0; i<8; i++) {
                    row.push(<td className={i % 2 ? 'light-square' : 'dark-square'} onClick={this.move.bind(this,i,row)}></td>)
                }
                rows.push(<tr>{row}</tr>);
            }
            if(i === 3 ){
                row = [];

                for(let i=0; i<8; i++) {
                    row.push(<td className={i % 2 ? 'dark-square': 'light-square'} onClick={this.move.bind(this,i,row)}></td>)
                }
                rows.push(<tr>{row}</tr>);
            }

            if(i === 4){
                row = [];

                for(let i=0; i<8; i++) {
                    row.push(<td className={i % 2 ? 'light-square' : 'dark-square'} onClick={this.move.bind(this,i,row)}></td>)
                }
                rows.push(<tr>{row}</tr>);
            }

            if(i === 5){
                row = [];

                for(let i=0; i<8; i++) {
                    row.push(<td className={i % 2 ? 'dark-square': 'light-square'} onClick={this.move.bind(this,i,row)}></td>)
                }
                rows.push(<tr>{row}</tr>);
            }

            //Load White Pawns
            if(i===6){
                row = [];

                for(let i=0; i<8; i++) {
                    row.push(<td className={i % 2 ? 'light-square' : 'dark-square'} onClick={this.move.bind(this,i,row)}>&#9817;</td>)
                }
                rows.push(<tr>{row}</tr>);
            }

            if(i === 7){
                row = [];

                for(let i=0; i<8; i++) {
                    row.push(<td className={i % 2 ? 'dark-square': 'light-square'}></td>)
                }
                rows.push(<tr>{row}</tr>);
            }
        }

        return(
            <table className = "chessboard">
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}