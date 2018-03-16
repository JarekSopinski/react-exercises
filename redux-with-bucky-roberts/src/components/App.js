import React, { Component } from 'react';
import UserList from '../containers/UserList'

class App extends Component {
    render() {
        return (
            <div>
                <h2>Username list:</h2>
                <UserList/>
                <br/>
                <h2>Username details:</h2>
            </div>
        );
    }
}

export default App;