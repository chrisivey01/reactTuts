import React from 'react'
import Total from './Total'

export default class Square extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            square:['7', '8', '9','/',
                    '4', '5', '6','x',
                    '1', '2', '3','-',
                    '0', '.', '=','+'
            ],
            number1:'0',
            number2:'0'
        }
    }

    math = (clicked) => {
        let numberPicked = this.state.square[clicked];
        let math = this.state.square;

        this.setState({
            number1:numberPicked
        })

    }

    render() {

        const {square} = this.state;
        return <div>
            <div id='calc'>
                { square.map((number,clicked) =>{
                    return (
                        <Total allNumber={square} key={clicked} number={number} math={this.math.bind(this, clicked)} />
                    );
                })
                }
            </div>
            <input value={this.state.number1}/>
            <button onClick={this.clear}>Clear</button>
        </div>
    }
}