import React, {Component} from 'react';

export default class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        console.log(this.props.item);
        this.props.onDelete(this.props.item);
    }

    render(){
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}>x</span>
                </div>
            </li>
        )
    }
}