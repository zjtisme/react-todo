import * as redux from 'redux';
import thunk from 'redux-thunk';

var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f=>f
  ));

  return store;
}
