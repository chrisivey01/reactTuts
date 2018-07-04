import React from 'react'
import Total from './Total'
import Equations from './Equations'
import Equals from './Equals'

export default class Square extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            square:['7', '8', '9',
                    '4', '5', '6',
                    '1', '2', '3',
                    '0', '.',
            ],
            functions:['clear'],
            equations:['/', 'x', '-', '+'],
            equalSign:['='],
            mathStuff:[],
            number1:'',
            number2:'',
            mathSign:'',
            newTotal: ''

        }
    }

    math = (clicked) => {
        let numberPicked = this.state.square[clicked];

        let mathStuff = this.state.mathStuff;
        let number1 = this.state.number1;
        let number2 = this.state.number2;

        let mathSign = this.state.mathSign;


        if(mathSign === ''){
            number1 = number1 + numberPicked
            this.setState({
                number1:number1,
            })
        }else{
            number2= number2 + numberPicked
            this.setState({
                number2:number2,
            })
        }

    }

    eq = (clicked) =>{
        let equation = this.state.equations[clicked]

        this.setState({
            mathSign:equation

        })
    }

    total = (clicked) =>{
        let number1 = this.state.number1
        let number2 = this.state.number2
        let mathSign = this.state.mathSign
        let newTotal = this.state.newTotal

        if(mathSign === '+'){
           newTotal = number1 + number2
        }else if(mathSign === '-'){
            newTotal = number1 - number2
        }else if(mathSign === 'x'){
            newTotal = number1 * number2
        }else if(mathSign === '/'){
            newTotal = number1 / number2
        }

        this.setState({
            newTotal:newTotal
        })
    }


    clear = () => {
        let number1 = ''
        let number2 = ''
        let mathSign = ''


        this.setState({
            number1:number1,
            number2:number2,
            mathSign: mathSign
        })
    }

    render() {

        const {square, functions, equations, equalSign,sign, number1,number2, mathSign, newTotal} = this.state;
        return <div>
            <div id='calc'>
                <div className='please'>
                    { square.map((number,clicked) =>{
                        return (
                            <Total allNumber={square} key={clicked} sign={sign} number={number} math={this.math.bind(this, clicked)} />
                        );
                    })
                    }
                    { equalSign.map((equals,clicked) => {
                        return(
                            <Equals equal={equals} key={clicked} functions={functions} number1={number1} number2={number2} mathSign={mathSign} equalSign={this.total.bind(this, clicked)} />
                        );
                    })
                    }
                </div>
                <div className='equations'>
                { equations.map((equation,clicked) => {
                return(
                    <Equations equations={equation} key={clicked} equals={equalSign} functions={functions}  eq={this.eq.bind(this, clicked)} />
                    );
                })
                }
                </div>

            </div>
            <div style={{float:'left'}}>
                <div>
                    <input value={number1}></input>
                </div>
                <div>
                    {mathSign}
                </div>
                <div>
                    <input value={number2}></input>
                </div>
                <div>
                    <label> Value: {newTotal} </label>
                </div>
                <div>
                    <button onClick={this.total}>Total</button>
                    <button onClick={this.clear}>Clear</button>
                </div>
            </div>
        </div>
    }
}