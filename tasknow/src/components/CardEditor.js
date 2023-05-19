import "../styles/CardEditor.css";

import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

import { TaskDetails } from "./Card";

class CardEditor extends Component {
  state = {
    taskDetails: this.props.taskDetails
    
  };
  

  handleChangeText = event => this.setState( (prevState) => { 
                            let taskDetails = Object.assign({}, prevState.taskDetails);
                              taskDetails.title = event.target.value
                              return  {taskDetails} });
  handleChangeDescription = event => this.setState( (prevState) => { 
    let taskDetails = Object.assign({}, prevState.taskDetails);
    taskDetails.description = event.target.value
    return  {taskDetails} });
  handleChangeFecha = new_value => this.setState( (prevState) => { 
    let taskDetails = Object.assign({}, prevState.taskDetails);
    taskDetails.expiration_date = new_value
    return  {taskDetails} });

    handleChangeUser = event => this.setState( (prevState) => { 
      let taskDetails = Object.assign({}, prevState.taskDetails);
      taskDetails.assigned_user = event.target.value
      return  {taskDetails} });

  onEnterKeyPressed = e => { // When key enter is pressed
    const { taskDetails } = this.state;

    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSave(taskDetails);
    }
  };

  render() {
    const { taskDetails } = this.state;
    const { onSave, onCancel, onDelete, adding } = this.props;
    return (
      <div className="Edit-Card">
        <div className="Card">
          <TextareaAutosize
            autoFocus
            className="Edit-Card-Textarea"
            placeholder="Titulo tarea"
            value={taskDetails.title}
            onChange={this.handleChangeText}
            onKeyDown={this.onEnterKeyPressed}
          />
        <hr></hr>
        <TextareaAutosize
            autoFocus
            className="Edit-Card-Description"
            placeholder="Descripción"
            value={taskDetails.description}
            onChange={this.handleChangeDescription}
            onKeyDown={this.onEnterKeyPressed}
          />
        <hr></hr>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker slotProps={{ textField: { size: 'small' } }} 
            value={ dayjs(taskDetails.expiration_date) }  
            onChange={ (new_value) => this.handleChangeFecha(new_value) }/>
         </LocalizationProvider>

        <hr></hr>

        <TextareaAutosize
            autoFocus
            className="Edit-Card-Description"
            placeholder="Usuario asignado"
            value={taskDetails.assigned_user }
            onChange={ this.handleChangeUser }
            onKeyDown={ this.onEnterKeyPressed }
          />

        </div>
        
        <EditButtons
          handleSave={() => onSave(taskDetails)}
          saveLabel={adding ? "Agregar tarea" : "Guardar"}
          handleDelete={onDelete}
          handleCancel={onCancel}
        />
      </div>
    );
  }
}

export default CardEditor;