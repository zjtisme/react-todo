var expect=require('expect');
var TodoAPI=require('TodoAPI');

describe('TodoAPI', ()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });

  it('should exist', ()=>{
    expect(TodoAPI).toExist();
  });

  describe('filterTodos', ()=>{
    var todos=[{
      id: 1,
      text: 'Test1 some',
      completed: true
    }, {
      id: 2,
      text: 'Test2',
      completed: false
    }, {
      id: 3,
      text: 'Test3 some',
      completed: true
    }];

    it('should return all items if showCompleted is true', ()=>{
      var filterTodos=TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });

    it('should return uncompleted items if showCompleted is false', ()=>{
      var filterTodos=TodoAPI.filterTodos(todos, false, '');
      expect(filterTodos.length).toBe(1);
    });

    it('should sort by completed status', ()=>{
      var filterTodos=TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', ()=>{
      var filterTodos=TodoAPI.filterTodos(todos, true, 'some');
      expect(filterTodos.length).toBe(2);
    });

    it('should filter todos by searchText if upper case', ()=>{
      var filterTodos=TodoAPI.filterTodos(todos, true, 'Some');
      expect(filterTodos.length).toBe(2);
    });

    it('should return all todos if searchText is empty', ()=>{
      var filterTodos=TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });
  });
});
