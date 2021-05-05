import {combineReducers, createStore} from "redux";
import {UserReducer} from './user/reducer'
const rootReducer = combineReducers({
    UserReducer,

});

export const store = createStore(rootReducer);

// eslint-disable-next-line import/no-anonymous-default-export
