import React, { Component } from 'react';
import UserList from '../containers/UserList';
import UserDetail from '../containers/UserDetail'

class App extends Component {
    render() {
        return (
            <div>
                <h2>Username list:</h2>
                <UserList/>
                <br/>
                <h2>Username details:</h2>
                <UserDetail/>
            </div>
        );
    }
}

export default App;