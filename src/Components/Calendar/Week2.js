import React from 'react'

export default class Week2 extends React.Component{
    constructor(props){
        super()

    }

    render(){

        let weekDays = this.props.weekDays

        return(
            <tr>
                {
                    weekDays.week2.days.map((day,i) =>{
                        return <td onClick={this.props.maybe.bind(day,i)} className={weekDays.week2.clicked[i] ? 'selected': null}  key={i}>
                            {day}</td>
                    })
                }
            </tr>
        )
    }
}