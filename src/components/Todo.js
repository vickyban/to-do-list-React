import React, {Component} from 'react';
import TodoItem from './TodoItem';
import AddItem from './AddItem';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: ['wash up', 'eat some cheese', 'take a nap'],
        }
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    onDelete(item){
        const updatedTodos = this.state.todos.filter((val) => item !== val );
        this.setState({todos: updatedTodos});
    }
    onAdd(item){
        const newTodos = this.state.todos;
        newTodos.push(item);
        this.setState({todos: newTodos});
    }

    render(){
        var todos = this.state.todos;
        todos = todos.map((item, index) => {
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            )
        })
        return (
            <div id="to-do-list">
                <p >The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        )
    }
}
export default Todo;