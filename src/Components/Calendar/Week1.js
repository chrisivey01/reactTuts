import React from 'react'

export default class Week1 extends React.Component{
    constructor(props){
        super(props)


    }



    render(){

        let weekDays = this.props.weekDays;
        return(
            <tr>
                {
                    weekDays.week1Days.map((day,i) =>{
                           return <td onClick={this.props.maybe} className={weekDays.clicked[i] ? 'selected': null}  key={i}>
                                {day}</td>
                })
                }
            </tr>
        )
    }
}