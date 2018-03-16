import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import allReducers from './reducers';

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>,
                // provider makes store available for all components
                document.getElementById('root'));

registerServiceWorker();
