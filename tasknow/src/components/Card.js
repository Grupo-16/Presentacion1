import "../styles/Card.css";
import CardEditor from "./CardEditor";
import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  card: state.cardsById[ownProps.cardId]
});

class Card extends Component {


  state = {
    hover: false,
    editing: false
  };
  
  startHover = () => this.setState({ hover: true });
  endHover = () => this.setState({ hover: false });
  
  startEditing = () =>
    this.setState({
      hover: false,
      editing: true,
      text: this.props.card.text,
      description: this.props.card.description
    });
  
  endEditing = () => this.setState({ hover: false, editing: false });
  
  editCard = async(text,description) => {
    const { card, dispatch } = this.props;
  
    this.endEditing();
  
    dispatch({
      type: "CHANGE_CARD_TEXT",
      payload: { cardId: card._id, cardText: text, cardDescription: description}
    });
  };
  
  deleteCard = async () => {
    const { listId, card, dispatch } = this.props;
  
    dispatch({
      type: "DELETE_CARD",
      payload: { cardId: card._id, listId }
    });
  };

  render() {
    const { card } = this.props;
    const { hover, editing } = this.state;
  
    if (!editing) {
      return (
        <div
          className="Card"
          onMouseEnter={this.startHover}
          onMouseLeave={this.endHover}
        >
          {hover && (
            <div className="Card-Icons">
              <div className="Card-Icon" onClick={this.startEditing}>
                <ion-icon name="create" />
              </div>
            </div>
          )}

          {card.text}
          
        </div>
      );
    } else {
      return (
        <CardEditor
          text={card.text}
          description={card.description}
          onSave={this.editCard}
          onDelete={this.deleteCard}
          onCancel={this.endEditing}
        />
      );
    }
  }
}

export default connect(mapStateToProps)(Card);