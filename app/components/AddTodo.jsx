var React=require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo=React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todo=this.refs.todoText.value;
    if(todo && todo.length > 0) {
      this.refs.todoText.value='';
      dispatch(actions.startAddTodo(todo));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <input className="button expanded" type="submit" value="Add Todo"/>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
