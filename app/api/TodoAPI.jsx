var $=require('jquery');

module.exports={
  filterTodos: function(todos, showCompleted, searchText) {
    var filterTodos=todos;

    // Filter by showCompleted
    filterTodos=filterTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filterTodos=filterTodos.filter((todo)=>{
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) !== -1;
    });

    // Sort todos with non-completed first
    filterTodos.sort((a, b)=> {
      if(!a.completed && b.completed) {
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filterTodos;
  }
};
