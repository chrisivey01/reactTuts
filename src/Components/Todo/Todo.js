import React from 'react'


export default class TodoList extends React.Component{
    constructor(props) {
        super()

    }

    render(){
        return (
            <div>
                <input value={this.props.todoItem} onChange={this.props.passed}/>
            </div>
        )
    }
}