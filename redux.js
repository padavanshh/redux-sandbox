import {createStore} from "redux";

const redux = require('redux')

const initialState = {
    counter: 0
}

// Store
const store = createStore(reducer)
console.log(store.getState())

// Reducer
const reducer = (state=initialState, action) => {
    if(action.type === 'ADD') {
        return {
            counter: state.counter + 1
        }
    }
    return state
}

// Actions
const addCounter = {
    type: 'ADD'
}

store.dispatch(addCounter)