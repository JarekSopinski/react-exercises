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
                <TodoItem item={item} key={index} />
            )

        });

        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure!</p>
                <ul>{todos}</ul>
            </div>
        );
    }

});

//create TodoItem component

const TodoItem = createReactClass({

   render: function () {
       return (
           <li>
               <div className="todo-item">
                   <span className="item-name">{this.props.item}</span>
               </div>
           </li>
       )
   }

});


// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));