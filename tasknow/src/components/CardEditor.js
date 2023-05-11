import "../styles/CardEditor.css";

import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';


class CardEditor extends Component {
  state = {
    text: this.props.text || "",
    description: this.props.description || "",
    fecha:  dayjs( new Date().toISOString().split('T')[0])
  };
  

  handleChangeText = event => this.setState({ text: event.target.value });
  handleChangeDescription = event => this.setState({description: event.target.value});
  handleChangeFecha = event => this.setState({ fecha: event.target.value });

  onEnterKeyPressed = e => { // When key enter is pressed
    const { text, description, fecha } = this.state;

    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSave(text, description, fecha);
    }
  };

  render() {
    const { text, description, fecha } = this.state;
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
          handleSave={() => onSave(text, description, fecha)}
          saveLabel={adding ? "Agregar tarea" : "Guardar"}
          handleDelete={onDelete}
          handleCancel={onCancel}
        />
      </div>
    );
  }
}

export default CardEditor;