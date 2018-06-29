import React from 'react'
import Total from './Total'
import Input from './Input'

export default class Square extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            square:['7', '8', '9','/',
                    '4', '5', '6','x',
                    '1', '2', '3','-',
                    '0', '.', '=','+'
            ],
            number1:null,
            number2:null,
            sign:null,
            total:'0'
        }
    }

    math = (clicked) => {
        let numberPicked = this.state.square[clicked];
        let math = this.state.square;



        if(this.state.number1 === null) {
            this.setState({
                number1: numberPicked
            })
        }else if(numberPicked == '/' || 'x' || '-' || '+'){
            this.setState({
                sign:numberPicked
            })
        }else{
            this.setState({
                number2: numberPicked
            })
        }

    }

    render() {

        const {square, number1, number2, total, sign} = this.state;
        return <div>
            <div id='calc'>
                { square.map((number,clicked) =>{
                    return (
                        <Total allNumber={square} key={clicked} sign={sign} number={number} math={this.math.bind(this, clicked)} />
                    );
                })
                }
            </div>

            <Input numba1={number1} numba2={number2} total={total}/>

            <button onClick={this.clear}>Clear</button>
        </div>
    }
}