import React from 'react'
import Todo from './Todo'


export default class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            todoItem:'',
            todoList:[]
        }

    }

    itemAdd = (event) => {
        this.setState({
            todoItem: event.target.value
        })
    }

    addList = () => {
        let list = [...this.state.todoList];
        let item = this.state.todoItem

        list.push(item);

        this.setState({
            todoList: list
        })

        item = ""

        this.setState({
            todoItem:item
        })
    }


    render(){
        const {todoItem,todoList} = this.state;

        return (
            <div>
                <Todo todoItem={todoItem} passed={this.itemAdd}/>
                <button onClick={this.addList}> test </button>

                {
                   todoList.map((item,i)=> {
                      return <li key={i}> {item} </li>
                   })
                }
            </div>
        )
    }
}