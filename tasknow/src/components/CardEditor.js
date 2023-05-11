import "../styles/CardEditor.css";

import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";

class CardEditor extends Component {
  state = {
    text: this.props.text || "",
    description: this.props.description || ""
  };

  handleChangeText = event => this.setState({ text: event.target.value });
  handleChangeDescription = event => this.setState({description: event.target.value});

  onEnterKeyPressed = e => { // When key enter is pressed
    const { text, description } = this.state;

    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSave(text, description);
    }
  };

  render() {
    const { text, description } = this.state;
    const { onSave, onCancel, onDelete, adding } = this.props;

    return (
      <div className="Edit-Card">
        <div className="Card">
          <TextareaAutosize
            autoFocus
            className="Edit-Card-Textarea"
            placeholder="Titulo tarea"
            value={text}
            onChange={this.handleChangeText}
            onKeyDown={this.onEnterKeyPressed}
          />
        <hr></hr>
        <TextareaAutosize
            autoFocus
            className="Edit-Card-Description"
            placeholder="Descripción"
            value={description}
            onChange={this.handleChangeDescription}
            onKeyDown={this.onEnterKeyPressed}
          />

        </div>
        
        <EditButtons
          handleSave={() => onSave(text, description)}
          saveLabel={adding ? "Agregar tarea" : "Guardar"}
          handleDelete={onDelete}
          handleCancel={onCancel}
        />
      </div>
    );
  }
}

export default CardEditor;