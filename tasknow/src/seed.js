import shortid from "shortid";
import { TaskDetails } from "./components/Card";

export default store => {
  console.log("Insert first list");
  const firstListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: firstListId, listTitle: "Por hacer" }
  });

  // Generar listas
  console.log("Insert first list");
  const secondId = shortid.generate();
  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: secondId, listTitle: "En curso" }
  });

  console.log("Insert first list");
  const thirdId = shortid.generate();
  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: thirdId, listTitle: "Finalizada" }
  });

  // Generar tareas
  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardDetails: new TaskDetails( "Prueba1", "La descripcion", "2022", "Gerson"),
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardDetails: new TaskDetails( "Prueba1", "La descripcion", "2022", "Gerson"),
    }
  });

  /*
  console.log("Insert second list");
  const secondListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: secondListId, listTitle: "Second list" }
  });
  

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Card 1"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Card 2"
    }
  });
  */
};