import React from 'react'

export default class Week2 extends React.Component{
    constructor(props){
        super(props)

    }

    render(){

        let weekDays = this.props.weekDays

        return(
            <tr>
                {
                    weekDays.week2Days.map((day,i) =>{
                        return <td onClick={this.props.maybe.bind(day,i)} className={weekDays.clicked[i] ? 'selected': null}  key={i}>
                            {day}</td>
                    })
                }
            </tr>
        )
    }
}