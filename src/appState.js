import {observable} from 'mobx';

const state = observable({
    todos: [{
        id: Math.random(100, 1000),
        title: 'buy some sugar'
    }],
    addTodo: function(title) {
        const todo = {
            title,
            id: Math.random(100, 1000)
        }
        this.todos = this.todos.concat(todo)
    },
    removeTodo: function(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    },
    get todoCount() {
        return this.todos.length
    },
    clearTodos: function() {
        this.todos = []
    }
})

export default state