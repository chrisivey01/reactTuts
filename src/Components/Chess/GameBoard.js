import React from 'react'
import Pieces from './Pieces'

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameBoard: {
                size: [3, 3, 3]
            },
            pieces: {
                oPiece: '',
                xPiece: '',
                clicked:false
            },
        }
    }

    xOrO = (picked,i) =>{

        let pieces = {...this.state.pieces}

        pieces.clicked = !pieces.clicked;



        if(pieces.clicked == true){
            pieces.xPiece = '',
            pieces.oPiece = 'O'
        }else{
            pieces.oPiece = '',
            pieces.xPiece = 'X'
        }

        this.setState({
            pieces:pieces
        })


    }

    render() {
        const {gameBoard} = this.state
        return (
            <div>
                <table style={{margin:'auto'}}>
                    <tbody>
                    <tr>
                        {
                            gameBoard.size.map((size, i) => {
                                return <td className="tictac">
                                    <Pieces pieces={this.state.pieces} try={this.xOrO.bind(this,i)}/>
                                </td>
                            })
                        }
                    </tr>
                    <tr>
                        {
                            gameBoard.size.map((size, i) => {
                                return <td className="tictac">
                                    <Pieces pieces={this.state.pieces} try={this.xOrO.bind(this,i)}/>
                                </td>
                            })
                        }
                    </tr>
                    <tr>
                        {
                            gameBoard.size.map((size, i) => {
                                return <td className="tictac">
                                    <Pieces pieces={this.state.pieces} try={this.xOrO.bind(this,i)} />
                                </td>
                            })
                        }
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}