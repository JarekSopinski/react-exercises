const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');

//Create component

const TodoComponent = createReactClass({

    render: function () {

        return(
            <div>
                <p><strong>Cheese name: </strong>{this.props.cheese.name}</p>
                <p><strong>Smell factor: </strong>{this.props.cheese.smellFactor}</p>
                <p><strong>Price: </strong>{this.props.cheese.price}</p>
            </div>
        );
    }

});

const myCheese = {
    name: 'Camembert',
    smellFactor: 'extreme pong',
    price: '3.50'
};

// put component into html page
ReactDOM.render(<TodoComponent mssg="I like cheese" cheese={myCheese} />, document.getElementById('todo-wrapper'));