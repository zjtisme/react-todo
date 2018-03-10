var React=require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends React.Component{
  onSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todo=this.refs.todoText.value;
    if(todo && todo.length > 0) {
      this.refs.todoText.value='';
      dispatch(actions.startAddTodo(todo));
    } else {
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <input className="button expanded" type="submit" value="Add Todo"/>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
