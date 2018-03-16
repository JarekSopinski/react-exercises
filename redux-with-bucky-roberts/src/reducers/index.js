import { combineReducers } from 'redux';
import UserReducer from './reducer_users';

const allReducers = combineReducers({
    users: UserReducer
});

export default allReducers