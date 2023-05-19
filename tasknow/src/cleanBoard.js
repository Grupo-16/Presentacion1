import shortid from "shortid";
import { TaskDetails } from "./components/Card";


function GenerateList(store, id, list_name){

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: id, listTitle: list_name }
  });

}

export async function cleanBoard(store) {
  store.dispatch({
      type: "RESET_INITIAL_STATE"
    });
      
}

function randomDate(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}


function GenerateTask(store, list_id, task_details){
  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: list_id,
      cardId: shortid.generate(),
      cardDetails: task_details,
    }
  });

}

export async function randomBoard(store){

  let list_names = ["Por hacer", "En curso", "Finalizada"];
  for (let index = 0; index < list_names.length; index++) {
    GenerateList(store, index + 1, list_names[index]);
  }

  // Generar tareas
  let random_int = Math.random() * (12 - 2) + 2; // Math.random() * (max - min) + min;
  let task_details = [];
  for (let index = 0; index < random_int; index++) {
    let task = new TaskDetails( random_titulos[index] , 
      descripciones[index], 
      randomDate(new Date(2023, 5, 20), new Date(), 0, 24),
      nombres[index]
    )
    task_details.push(task);
  }


  for (let index = 0; index < task_details.length; index++) {
      GenerateTask(store, index%3 + 1 , task_details[index] );
  }

}


const random_titulos = [
  "Actualización de base de datos de clientes",
  "Revisión y corrección de errores ortográficos en documentos",
  "Organización y archivo de documentos físicos",
  "Preparación de informes de gastos mensuales",
  "Investigación y selección de imágenes para presentaciones",
  "Programación de reuniones y coordinación de agendas",
  "Realización de llamadas telefónicas de seguimiento a clientes",
  "Clasificación y etiquetado de productos en inventario",
  "Traducción de documentos cortos al idioma requerido",
  "Investigación de proveedores y solicitud de cotizaciones"
];

const descripciones = [
  "En esta tarea, se te solicita que actualices la base de datos de clientes con la información más reciente...",
  "Tu tarea consiste en revisar documentos en busca de errores ortográficos y gramaticales...",
  "En esta tarea, se te pide que organices y archives documentos físicos de manera sistemática...",
  "Tu responsabilidad será preparar informes mensuales de gastos, recopilando los datos necesarios y presentándolos de manera clara y concisa...",
  "En esta tarea, se te solicita que encuentres imágenes relevantes y de alta calidad para su uso en presentaciones...",
  "Tu labor consiste en programar reuniones, coordinar agendas y enviar recordatorios a los participantes...",
  "En esta tarea, se te asignará hacer llamadas telefónicas de seguimiento a clientes para recopilar comentarios o resolver consultas...",
  "Tu tarea consiste en clasificar y etiquetar los productos en el inventario de acuerdo con los criterios establecidos...",
  "En esta tarea, se te solicita que traduzcas documentos cortos a un idioma específico...",
  "Tu responsabilidad será investigar proveedores potenciales y solicitar cotizaciones para productos o servicios específicos..."
];

const nombres = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Sophia",
  "Jackson",
  "Ava",
  "Aiden",
  "Isabella",
  "Lucas"
];