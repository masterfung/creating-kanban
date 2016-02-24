import React from 'react';

export default class Note extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  render() {
    if(this.state.editing) {
      return this.renderEdit();
    }

    return this.renderNote();
  }

  renderEdit = () => {
    return <input
        input="text"
        autoFocus={true}
        ref={
          (e) => e ? e.selectionStart = this.props.task.length : null
        }
        defaultValue={this.props.task}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />;
  }

  renderNote = () => {
    const onDelete = this.props.onDelete;

    return <div
      onClick={this.edit}>
      <span>{this.props.task}</span>
      {onDelete ? this.renderDelete() : null}
    </div>
  }

  renderDelete = () => {
    return <span
        className="delete-note"
        onClick={this.props.onDelete}><i className="material-icons">close</i></span>
  }

  edit = () => {
    this.setState({editing: true});
  }

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit = (e) => {
    const value = e.target.value

    if(this.props.onEdit) {
      this.props.onEdit(value);

      this.setState({editing: false})
    }
  }
}
