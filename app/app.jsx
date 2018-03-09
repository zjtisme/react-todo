var React=require('react');
var ReactDOM=require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory}=require('react-router');

var TodoApp=require('TodoApp');

var actions=require('actions');
var store=require('configureStore').configure();
var TodoAPI=require('TodoAPI');

store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);

// APP
// apiKey: "AIzaSyBQoG9gV8ajG4Vx_33-Y8ux0ox_ipnl-kY",
//     authDomain: "todo-app-c142f.firebaseapp.com",
//     databaseURL: "https://todo-app-c142f.firebaseio.com",
//     projectId: "todo-app-c142f",
//     storageBucket: "",
//     messagingSenderId: "550245144360"

// TEST
// apiKey: "AIzaSyCu1zCdyfZF-Zy_Y7X2VPNFaymWQYQDywk",
//     authDomain: "todo-app-test-15801.firebaseapp.com",
//     databaseURL: "https://todo-app-test-15801.firebaseio.com",
//     projectId: "todo-app-test-15801",
//     storageBucket: "todo-app-test-15801.appspot.com",
//     messagingSenderId: "396492320938"
