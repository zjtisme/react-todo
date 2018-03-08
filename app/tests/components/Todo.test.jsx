var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jquery');
var TestUtils=require('react-addons-test-utils');

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo component', ()=>{
  it('should exist', ()=>{
    expect(Todo).toExist();
  });

  it('should dispatch startToggleTodo action on click', ()=>{
    var todoData={
      id: 199,
      text: 'Test',
      completed: false
    };

    var action = actions.startToggleTodo(todoData.id, !todoData.completed);
    var spy=expect.createSpy();
    var todo=TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);

    var $el=$(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
