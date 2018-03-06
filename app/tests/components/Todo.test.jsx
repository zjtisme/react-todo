var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');

var Todo=require('Todo');

describe('Todo component', ()=>{
  it('should exist', ()=>{
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', ()=>{
    var todoData={
      id: 199,
      text: 'Test',
      completed: false
    };

    var spy=expect.createSpy();
    var todo=TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

    var $el=$(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);
  });
});
