const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');

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
                <li>{item}</li>
            )

        });

        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure!</p>
                <p>{this.state.age}</p>
                <ul>{todos}</ul>
            </div>
        );
    }

});


// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));