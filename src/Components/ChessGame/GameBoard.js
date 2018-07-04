import React from 'react'
import Squares from './Squares'
import BlackPawns from './BlackPawns'
import WhitePawns from './WhitePawns'
import WhiteMain from './WhiteMain'
import BlackMain from './BlackMain'


export default class GameBoard extends React.Component{
    constructor(props){
        super(props)

        this.state={
            squares: ['', '', '', '',
                    '', '', '', ''],
        }
    }

    whiteMain = () =>{
        return [
            <div className='chessSquare'>&#9814;</div>,
            <div className='chessSquare'>&#9816;</div>,
            <div className='chessSquare'>&#9815;</div>,
            <div className='chessSquare'>&#9812;</div>,
            <div className='chessSquare'>&#9813;</div>,
            <div className='chessSquare'>&#9815;</div>,
            <div className='chessSquare'>&#9816;</div>,
            <div className='chessSquare'>&#9814;</div>
        ]
    }

    blackMain = () =>{
        return [
            <div className='chessSquare'>&#9820;</div>,
            <div className='chessSquare'>&#9822;</div>,
            <div className='chessSquare'>&#9821;</div>,
            <div className='chessSquare'>&#9818;</div>,
            <div className='chessSquare'>&#9819;</div>,
            <div className='chessSquare'>&#9821;</div>,
            <div className='chessSquare'>&#9822;</div>,
            <div className='chessSquare'>&#9820;</div>

        ]
    }

    move = (square,position,e) =>{

        let a = e.currentTarget.value
    }

    render(){
        const {squares,main} = this.state
        return(
            <div id='board'>

                {/*start white rows*/}
                <div className='row'>

                            <WhiteMain wMain={this.whiteMain()}/>

                </div>
                <div className='row'>
                    {
                        squares.map((square,position) =>{
                            return(
                                <WhitePawns square={square} key={position} click={()=> this.move(square,position,this)} />
                            )
                        })
                    }
                </div>

                {/*start blank rows*/}
                <div className='row'>
                    {
                        squares.map((square,position) =>{
                            return(
                                <Squares square={square} key={position} />
                            )
                        })
                    }
                </div>
                <div className='row'>
                    {
                        squares.map((square,position) =>{
                            return(
                                <Squares square={square} key={position} />
                            )
                        })
                    }
                </div>
                <div className='row'>
                    {
                        squares.map((square,position) =>{
                            return(
                                <Squares square={square} key={position} />
                            )
                        })
                    }
                </div>
                <div className='row'>
                    {
                        squares.map((square,position) =>{
                            return(
                                <Squares square={square} key={position}/>
                            )
                        })
                    }
                </div>

                {/*start black row*/}
                <div className='row'>
                    {
                        squares.map((square,position) =>{
                            return(
                                <BlackPawns square={square} key={position}/>
                            )
                        })
                    }
                </div>
                <div className='row'>
                        <BlackMain bMain={this.blackMain()}></BlackMain>
                </div>
            </div>
        )
    }
}