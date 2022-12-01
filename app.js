// using selectors inside the element

//para jalar los 3 contenedores que tienen, cada uno, una pregunta y respuesta.
const questions = document.querySelectorAll(".question");

// a cada contenedor de pregunta y respuesta le vamos a pasar un foreach
// donde a cada botón de este contenedor le ponemos la función de reaccionar al click
questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function(){

        // abres una pestaña nueva y la respuesta anterior abierta se cierra
        questions.forEach(function(item){
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        // para mostrar la respuesta
        question.classList.toggle("show-text");
    })
});





/////////////////////////////
// traversing de DOM
////////////////////////////

// const btns = document.querySelectorAll(".question-btn")

// btns.forEach(function(button){
//     button.addEventListener("click", function(eventObject) {
//         const question = eventObject.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// });