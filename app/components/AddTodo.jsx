var React=require('react');

var AddTodo=React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var todo=this.refs.todoText.value;
    if(todo && todo.length > 0) {
      this.refs.todoText.value='';
      this.props.onAddTodo(todo);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <input className="button expanded" type="submit" value="Add Todo"/>
        </form>
      </div>
    );
  }
});

module.exports=AddTodo;
