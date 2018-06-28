import React from 'react'
import Week1 from './Week1'
import Week2 from './Week2'
import Week3 from './Week3'
import Week4 from './Week4'


export default class CalBoard extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            weekDays: {
                week1Days: [1, 2, 3, 4, 5, 6, 7],
                week2Days: [8,9,10,11,12,13,14],
                week3Days: [15,16,17,18,19,20,21],
                week4Days: [22,23,24,25,26,27,28],
                clicked:[false,false,false,false,false,false,false]
            },
            day:null
        }
    }

    highlight = (day) => {
        let clicked = this.state.weekDays.clicked
        let weekDays = {...this.state.weekDays}
        let week1Days = [...this.state.weekDays.week1Days]

        weekDays.clicked[day] = !weekDays.clicked[day]
        this.setState({
            weekDays: {...this.state.weekDays, clicked},
            day:day +1
        })

    }

    render() {
        return(
            <div>
                <table style={{border:'solid' , borderColor:'black'}} cellSpacing={2} cellPadding={2}>
                    <tbody>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>


                        <Week1 weekDays={this.state.weekDays} day={this.state.weekDays.week1Days} maybe={this.highlight.bind(this)}/>


                        <Week2 weekDays={this.state.weekDays} day={this.state.weekDays.week2Days} maybe={this.highlight.bind(this)}/>


                        <Week3 weekDays={this.state.weekDays} day={this.state.weekDays.week3Days} maybe={this.highlight.bind(this)}/>


                        <Week4 weekDays={this.state.weekDays} day={this.state.weekDays.week4Days} maybe={this.highlight.bind(this)}/>

                    </tbody>
                </table>
                {this.state.day}

            </div>
        )
    }
}