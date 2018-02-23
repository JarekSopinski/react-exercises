const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');
require('./css/index.css');

// Module requirements
const TodoItem = require('./todoitem');
const AddItem = require('./addItem');

//Create component

const TodoComponent = createReactClass({

    getInitialState: function () {
        return {
            todos: ["wash up", "eat some cheese", "take a nap", "buy flowers"],
        }
    },

    render: function () {

        let todos = this.state.todos;

        todos = todos.map(function (item, index) {

            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            )

        }.bind(this));

        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure!</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    }, // render

    //custom functions
    
    onDelete: function (item) {
        let updatedTodos = this.state.todos.filter(function (val, index) {
            return item !== val; // if we return true, element will be deleted
        });
        this.setState({
            todos: updatedTodos
        })
    },
    
    onAdd: function (item) {
        const updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    },


});

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));