import { createStore, combineReducers, applyMiddleware } from "redux";
import calculationReducer from "./calculationReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
        calculation:calculationReducer,
        form: formReducer,
    }
)

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;

export default store;