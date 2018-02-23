const React = require('react');
const createReactClass = require('create-react-class');
require('./css/addItem.css');

const AddItem = createReactClass({

    render: function () {

        return (
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem" />
                <input type="submit" value="Add new"/>
            </form>
        )

    },

    //Custom functions

    handleSubmit: function (event) {
        event.preventDefault(); // prevents reloading after submiting
        //console.log(this.refs.newItem.value);
        this.props.onAdd(this.refs.newItem.value)
    }

});

module.exports = AddItem;