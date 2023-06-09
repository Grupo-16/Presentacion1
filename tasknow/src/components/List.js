import "../styles/List.css";

import React, { Component } from "react";
import { connect , useSelector} from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Card from "./Card";
import CardEditor from "./CardEditor";
import ListEditor from "./ListEditor";
import store from "../store";
import { TaskDetails } from "./Card";
import shortid from "shortid";
import dayjs, { Dayjs } from 'dayjs';
class List extends Component {
  state = {
    editingTitle: false,
    title: this.props.list.title,
    addingCard: false
  };

  toggleAddingCard = () =>
    this.setState({ addingCard: !this.state.addingCard });

  addCard = async (taskDetails) => {
    const { listId, dispatch } = this.props;

    this.toggleAddingCard();

    const cardId = shortid.generate();

    dispatch({
      type: "ADD_CARD",
      payload: { cardDetails : taskDetails, cardId, listId }
    });
  };

  toggleEditingTitle = () =>
    this.setState({ editingTitle: !this.state.editingTitle });

  handleChangeTitle = e => this.setState({ title: e.target.value });

  editListTitle = async () => {
    const { listId, dispatch } = this.props;
    const { title } = this.state;

    this.toggleEditingTitle();

    dispatch({
      type: "CHANGE_LIST_TITLE",
      payload: { listId, listTitle: title }
    });
  };

  deleteList = async () => {
    const { listId, list, dispatch } = this.props;

    if (window.confirm("Are you sure to delete this list?")) {
      dispatch({
        type: "DELETE_LIST",
        payload: {listId, cards: list.cards}
      });
    }
  };

  removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

  applyFilter(cardId, index, list_id){
    let cardTitle = store.getState().cardsById[cardId].taskDetails.title;
    const searchFilter = this.props.searchFilter;
    let is_valid = true;
    
    let clean_search = this.removeAccents(searchFilter).toLowerCase().replace(/[^a-zA-Z ]/g, "")
    if( (new RegExp(clean_search)).test( this.removeAccents( cardTitle.toLowerCase() )  )){
      return(
        <Card
          key={cardId}
          cardId={cardId}
          index={index}
          listId={list_id}
        />);
    }
    return(<div></div>)
  };


  render() {
    const { list, index } = this.props;
    const { editingTitle, addingCard, title } = this.state;

    return (
      
          <div
            
            className="List"
          >
            {editingTitle ? (
              <ListEditor
                list={list}
                title={title}
                handleChangeTitle={this.handleChangeTitle}
                saveList={this.editListTitle}
                onClickOutside={this.editListTitle}
                deleteList={this.deleteList}
                
              />
            ) : (
              <div className="List-Title" onClick={this.toggleEditingTitle}>
                {list.title}
              </div>
            )}

            <Droppable droppableId={list._id}>
              {(provided, _snapshot) => (
                <div ref={provided.innerRef} className="Lists-Cards" id={ list.title.replace(/\s+/g, '') + 'Cards'}>
                  {list.cards &&
                    
                    list.cards.map( (cardId, index) => (
                      
                      this.applyFilter(cardId, index, list._id) // Filter cards
                    )
                    )}

                  {provided.placeholder}

                  {addingCard ? (
                    <CardEditor
                      onSave={this.addCard}
                      onCancel={this.toggleAddingCard}
                      taskDetails= {new TaskDetails("","",dayjs(new Date().toISOString().split('T')[0]),"" )}
                      adding
                    />
                  ) : (
                    
                    <div className="Toggle-Add-Card" onClick={this.toggleAddingCard}>
                      <ion-icon name="add" /> Nueva tarea
                    </div>
                    
                    
                  )}
                </div>
              )}
            </Droppable>
          </div>
        
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state.listsById[ownProps.listId]
});

export default connect(mapStateToProps)(List);