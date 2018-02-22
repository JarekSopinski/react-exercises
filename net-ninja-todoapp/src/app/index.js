const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');

//Create component

const TodoComponent = createReactClass({

    render: function () {

        return(
            <div>
                <h1>Hello</h1>
                <p>World</p>
            </div>
        );
    }

});

// put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));