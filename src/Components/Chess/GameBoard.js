import React from 'react'
import Pieces from './Pieces'

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameBoard: {
                tiles: [
                    '', '', '',
                    '', '', '',
                    '', '', ''
                ]
            },
            turn:'o'
        }
    }

    tileClick = (position) => {
        let player = this.state.turn;
        let tiles = this.state.gameBoard.tiles;
        //If the selected position is already filled, return to prevent it being replaced.
        if ( (tiles[position] === 'x' || tiles[position] === 'o') ) return;
        tiles[position] = player;
        this.setState({tiles: tiles, turn: player === 'o' ? 'x' : 'o'});

    }

    clear = () =>{
        let gameBoard = {...this.state.gameBoard}
        let tiles = ['','','',
                    '','','',
                    '','','']
        gameBoard.tiles = [...tiles]
        this.setState({
            gameBoard:gameBoard
        })
    }

    render() {

        const {gameBoard} = this.state;
        return <div>
            <div id='game'>
                { gameBoard.tiles.map((tile,position) =>{
                    return (
                        <Pieces status={tile} key={position} turn={this.state.turn} tileClick={this.tileClick.bind(this, position)} />
                    );
                })
                }
            </div>
            <button onClick={this.clear}>Clear</button>
        </div>
    }
}