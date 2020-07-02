import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
        form: formReducer,
    }
)

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;

export default store;