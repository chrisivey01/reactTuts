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
                week1: {
                    days: [1, 2, 3, 4, 5, 6, 7],
                    clicked: [false, false, false, false, false, false, false]
                },
                week2: {
                    days: [8, 9, 10, 11, 12, 13, 14],
                    clicked: [false, false, false, false, false, false, false]
                },
                week3: {
                    days: [15, 16, 17, 18, 19, 20, 21],
                    clicked: [false, false, false, false, false, false, false]
                },
                week4: {
                    days: [22, 23, 24, 25, 26, 27, 28],
                    clicked: [false, false, false, false, false, false, false]
                }
            }
        }
    }
    week1 = (day) => {
        let clicked1 = this.state.weekDays.week1.clicked
        let week1 = {...this.state.weekDays.week1}

        week1.clicked[day] = !week1.clicked[day]
        this.setState({
            weekDays: {...this.state.weekDays, clicked1},
            day:this.state.weekDays.week1.days[day]
        })

        if(week1.clicked[day] === false){
            this.setState({
                day:''
            })
        }

    }
    week2 = (day) => {
        let clicked2 = this.state.weekDays.week2.clicked
        let week2 = {...this.state.weekDays.week2}

        week2.clicked[day] = !week2.clicked[day]
        this.setState({
            weekDays: {...this.state.weekDays, clicked2},
            day:this.state.weekDays.week2.days[day]
        })
        if(week2.clicked[day] === false){
            this.setState({
                day:''
            })
        }

    }
    week3 = (day) => {
        let clicked3 = this.state.weekDays.week3.clicked
        let week3 = {...this.state.weekDays.week3}


        week3.clicked[day] = !week3.clicked[day]
        this.setState({
            weekDays: {...this.state.weekDays, clicked3},
            day:this.state.weekDays.week3.days[day]
        })
        if(week3.clicked[day] === false){
            this.setState({
                day:''
            })
        }

    }
    week4 = (day) => {
        let clicked4 = this.state.weekDays.week4.clicked
        let week4 = {...this.state.weekDays.week4}


        week4.clicked[day] = !week4.clicked[day]
        this.setState({
            weekDays: {...this.state.weekDays, clicked4},
            day:this.state.weekDays.week4.days[day]
        })
        if(week4.clicked[day] === false){
            this.setState({
                day:''
            })
        }

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


                        <Week1 weekDays={this.state.weekDays} day={this.state.weekDays.week1.days} maybe={this.week1.bind(this)}/>


                        <Week2 weekDays={this.state.weekDays} day={this.state.weekDays.week2.days} maybe={this.week2.bind(this)}/>


                        <Week3 weekDays={this.state.weekDays} day={this.state.weekDays.week3.days} maybe={this.week3.bind(this)}/>


                        <Week4 weekDays={this.state.weekDays} day={this.state.weekDays.week4.days} maybe={this.week4.bind(this)}/>

                    </tbody>
                </table>
                {this.state.day}

            </div>
        )
    }
}