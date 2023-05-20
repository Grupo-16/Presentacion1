# TaskNow

## Descripción del problema

Los usuarios modernos a menudo tienen agendas muy ocupadas, con múltiples responsabilidades
y tareas que realizar. Mantener un registro de todas estas tareas puede ser un desafío y puede
resultar en la pérdida de información importante y la falta de productividad. Además, los usuarios
también pueden necesitar compartir tareas con otras personas, lo que puede ser difícil si no hay un
sistema centralizado para hacerlo.
## Justificación de la solución
TaskNow se propone como una solución al problema anteriormente mencionado. La aplicación web
permitirá a los usuarios mantener un registro de todas sus tareas, establecer fechas de vencimiento
y recibir recordatorios de sus tareas pendientes. Además, los usuarios podrán asignar tareas a otros
miembros del equipo, lo que facilitará la colaboración y la asignación de responsabilidades. La
solución también incluirá una función de seguimiento del progreso de las tareas, lo que permitirá a
los usuarios saber en qué etapa se encuentran sus tareas y cuánto tiempo les queda para
completarlas.
## Requerimientos de alto nivel
- La aplicación web debe permitir a los usuarios crear una cuenta y tener un perfil
personalizado. Debe permitir a los usuarios agregar, editar y eliminar tareas. Debe permitir
a los usuarios establecer fechas de vencimiento y recibir recordatorios de tareas
pendientes.
- La aplicación web debe permitir a los usuarios asignar tareas a otros miembros del equipo
y permitir la colaboración en tiempo real. Debe incluir una función de seguimiento del
progreso de las tareas, que permita a los usuarios conocer en qué etapa se encuentran sus
tareas y cuánto tiempo les queda para completarlas.
- La aplicación web debe ser segura y mantener la privacidad de la información del usuario.
Debe ser fácil de usar y tener una interfaz de usuario intuitiva. Debe ser escalable y capaz
de manejar un gran número de usuarios. Debe tener una velocidad de carga rápida y una
buena disponibilidad.

El factor diferenciador de esta aplicación con respecto a otras en el mercado sería la capacidad de
integrar diferentes herramientas y plataformas de gestión de tareas en un solo lugar. Además, la
aplicación tendría una interfaz de usuario simple e intuitiva que permitiría a los usuarios crear y
administrar listas de tareas de manera eficiente y rápida. También tendría una serie de funciones
avanzadas, como la capacidad de asignar tareas a otros usuarios, programar recordatorios y
establecer fechas de vencimiento para las tareas. Todo esto, combinado con un sólido conjunto de
herramientas de análisis y seguimiento, permitiría a los usuarios optimizar su tiempo y aumentar su
productividad de manera significativa.

## Instrucciones de Instalación

- Ir al directorio tasknow y ejecutar
    npm install
- Ir al directorio server y ejecutar
    npm install
- Luego de esto, crear un archivo env en la carpeta server con los siguientes contenidos:
    ATLAS_URI=<credencial mongodb>
    PORT=9000
    JWT_SECRET=<clave secreta>
- Ir al directorio server y ejecutar
    npm start
- Ir al directorio tasknow y ejecutar
    npm start