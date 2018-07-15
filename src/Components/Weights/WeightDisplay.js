import React from 'react'
import WeightInput from './WeightInput'
import WeightTable from './WeightTable'

export default class WeightDisplay extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            weightInput: '',
            fortyFives:null,
            twentyFives:null,
            tens:null,
            fives:null,
            twoPointFives:null,
            leftOver:null
        }
    }

    calc = () =>{
        let weights = this.state.weightInput;
        let fortyFives = this.state.fortyFives;
        let twentyFives = this.state.twentyFives;
        let tens = this.state.tens;
        let fives = this.state.fives;
        let twoPointFives = this.state.twoPointFives;
        let leftOver = this.state.leftOver;


        fortyFives = 0;
        twentyFives = 0;
        tens = 0;
        fives = 0;
        twoPointFives = 0;
        leftOver = 0;


        weights = weights - 45;
        while(weights >= 5) {
            if(weights >= 90){
                weights = weights - 90
                fortyFives = fortyFives + 2
            } else if (weights >= 50){
                weights = weights - 50
                twentyFives = twentyFives + 2
            } else if (weights >= 20){
                weights = weights - 20
                tens = tens + 2
            } else if (weights >= 10){
                weights = weights - 10
               fives = fives + 2
            }else if (weights >= 5){
                weights = weights - 5
                twoPointFives = twoPointFives + 2
            }
        }
        leftOver = weights;


        this.setState({
            fortyFives: fortyFives,
            twentyFives:twentyFives,
            tens: tens,
            fives: fives,
            twoPointFives: twoPointFives,
            leftOver: leftOver
        })
    }

    weightInputValue = (event) => {
        this.setState({
            weightInput:event.target.value
        })
    }


    render() {
        const{fortyFives, twentyFives, tens, fives, twoPointFives, leftOver} = this.state
        return (
            <div>
                <WeightInput weightInput={this.state.weightInput} inputs={this.weightInputValue}/>

                <div>
                    <button onClick={this.calc}>Calc</button>
                </div>
                <div>
                    <WeightTable fortyFives={fortyFives} twentyFives={twentyFives}
                                   tens={tens} fives={fives}
                                   twoPointFives={twoPointFives} leftOver={leftOver}/>
                </div>
            </div>
        )
    }
}