import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import uuid from 'uuid';

const TodoStore = Object.assign({}, EventEmitter.prototype, {
	todos: [{
	id: uuid.v4(),
		content: 'first one message'
	}, {
		id: uuid.v4(),
		content: 'second one message'
	}],
	getAll() {
		return this.todos;
	},
	addTodo(todo) {
		this.todos.push(todo);
	},
	deleteTodo(id) {
		this.todos = this.todos.filter(item => item.id !== id);
	},
	emitChange() {
		this.emit('change');
	},
	addChangeListener(callback) {
		this.on('change', callback);
	},
	removeChangeListener(callback) {
		this.removeListener('change', callback);
	}
});

AppDispatcher.register((action) => {
	switch(action.actionType){
		case "CREATE_TODO":
			TodoStore.addTodo(action.todo);
			TodoStore.emitChange();
			break;
		case "DELETE_TODO":
			TodoStore.deleteTodo(action.id);
			TodoStore.emitChange();
			break;
		default:
			//
	}
});



export default TodoStore;