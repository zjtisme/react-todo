var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');

var AddTodo=require('AddTodo');

describe('AddTodo component', ()=>{
  it('should exist', ()=>{
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo if valid string entered', ()=>{
      var spy=expect.createSpy();
      var todoform=TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      var $el=$(ReactDOM.findDOMNode(todoform));

      todoform.refs.todoText.value='Feed cat';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toHaveBeenCalledWith('Feed cat');
    });

    it('should not call onAddTodo if invalid string entered', ()=>{
        var spy=expect.createSpy();
        var todoform=TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el=$(ReactDOM.findDOMNode(todoform));

        todoform.refs.todoText.value='';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
      });

});
