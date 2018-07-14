import React from 'react'

export default class Week4 extends React.Component{
    constructor(props){
        super()


    }



    render(){

        let weekDays = this.props.weekDays

        return(
            <tr>
                {
                    weekDays.week4.days.map((day,i) =>{
                        return <td onClick={this.props.maybe.bind(day,i)} className={weekDays.week4.clicked[i] ? 'selected': null}  key={i}>
                            {day}</td>
                    })
                }
            </tr>
        )
    }
}