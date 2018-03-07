var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');

var TodoList=require('TodoList');
var Todo=require('Todo');

describe('TodoList component', ()=>{
  it('should exist', ()=>{
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', ()=>{
    var todos=[{
      id: 1,
      text: 'Test 1'
    }, {
      id: 2,
      text: 'Test 2'
    }];
    var todoList=TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents=TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', ()=>{
    var todos=[];
    var todoList=TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el=$(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
