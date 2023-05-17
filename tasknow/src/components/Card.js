import "../styles/Card.css";
import CardEditor from "./CardEditor";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

const mapStateToProps = (state, ownProps) => ({
  card: state.cardsById[ownProps.cardId]
});




export class TaskDetails{
  title = "default"
  description = "default"
  expiration_date = "default"
  assigned_user = "default"

  constructor(title = "", description= "", expiration_date= "", assigned_user= ""){
    this.title = title;
    this.description = description;
    this.expiration_date = expiration_date;
    this.assigned_user = assigned_user;
  }

}


class Card extends Component {

  // Class react settings
  state = {
    hover: false,
    editing: false,
    seeingDetails: false,
  };
  
  // When user start to edit the task
  startEditing = () =>
    this.setState({
      hover: false,
      editing: true,
    });
  
  // When user finish card edition
  endEditing = () => this.setState({ hover: false, editing: false });

  // Save task data changes
  editCard = async(taskDetails) => {
    const { card, dispatch } = this.props;
    
    this.endEditing();
  
    dispatch({
      type: "CHANGE_CARD_TEXT",
      payload: { cardId: card._id, cardDetails: taskDetails}
    });

  };
  
  seeDetails = () => this.setState({
    seeingDetails: !this.state.seeingDetails,
  });

  deleteCard = async () => {
    const { listId, card, dispatch } = this.props;
  
    dispatch({
      type: "DELETE_CARD",
      payload: { cardId: card._id, listId }
    });
  };


  startHover = () => this.setState({ hover: true });
  endHover = () => this.setState({ hover: false });

  render() {
    
    const { card, index } = this.props;
    const { hover, editing, seeingDetails } = this.state;
    // new Date().toISOString().split('T')[0]
    console.log("Este es el objeto: ", card.taskDetails.title);
    if (!editing) {
      return (
        <Draggable draggableId={card._id} index={index}> 
          {(provided, snapshot) => (
        <div
        ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
          className="Card"
          onMouseEnter={this.startHover}
          onMouseLeave={this.endHover}
          onClick={this.seeDetails}
        >
          {hover && (
            <div className="Card-Icons">
              <div className="Card-Icon" onClick={this.startEditing}>
                <ion-icon name="create" />
              </div>
            </div>
          )}
          
          <div className="CardTitle">
            { card.taskDetails.title }
          </div>

          {seeingDetails && (
          
          // Descripcion de la tarea
          <div className="CardDescripcion">
            <hr></hr>
            {card.taskDetails.description || "Sin descripcion..."}
          </div>
          )}

          <div className="CardVencimiento">
            Vence: { new Date().toISOString().split('T')[0]  } 
          </div>
          
        </div>
        )}
        </Draggable>
      );
    } else {
      return (
        <CardEditor
          taskDetails= {card.taskDetails}

          onSave={ this.editCard }
          onDelete={ this.deleteCard }
          onCancel={ this.endEditing }
        />
      );
    }
  }
}

export default connect(mapStateToProps)(Card);