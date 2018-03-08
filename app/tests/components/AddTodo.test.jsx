var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');

var {AddTodo}=require('AddTodo');

describe('AddTodo component', ()=>{
  it('should exist', ()=>{
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', ()=>{
      var spy=expect.createSpy();
      var action = {
        type: 'ADD_TODO',
        text: 'Feed cat'
      }
      var todoform=TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      var $el=$(ReactDOM.findDOMNode(todoform));

      todoform.refs.todoText.value='Feed cat';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid string entered', ()=>{
        var spy=expect.createSpy();
        var todoform=TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el=$(ReactDOM.findDOMNode(todoform));

        todoform.refs.todoText.value='';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
      });

});
