import React from 'react';
import List from './List';
import CreateButton from './CreateButton';
import TodoStore from '../stores/TodoStore';
import TodoAction from '../actions/TodoAction';
import uuid from 'uuid';

class Todo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			todos: TodoStore.getAll()
		};
		this.createTodo = this.createTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount(){
		TodoStore.addChangeListener(this.onChange);
	}
	ComponentWillUnmount(){
		TodoStore.removeChangeListener(this.onChange);
	}
	createTodo(){
		TodoAction.create({ id: uuid.v4(), content:"third content"});
	}
	deleteTodo(id){
		TodoAction.delete(id);
	}
	onChange(){
		this.setState({
			todos: TodoStore.getAll()
		})
	}
	render() {
		return (
			<div>
				<List items={this.state.todos} onDelete={this.deleteTodo} />
				<CreateButton onClick={this.createTodo} />
			</div>
		);
	}
}

export default Todo;