var todoApp;

window.onload = function() {
    var todoApp = new TodoApp();
    todoApp.start();
}


// var todoList;

// var createTodoElement = function(todo){
//     var el = document.createElement('div');
//     el.className = "todo-item";

//     var todoTextElement = document.createElement('p');
//     todoTextElement.innerHTML = todo.text;

//     var todoInfoElement = document.createElement('span');
//     todoInfoElement.innerHTML = "Created at: " + todo.createdAt.toLocaleString();
    
//     el.appendChild(todoTextElement);
//     el.appendChild(todoInfoElement);

//     return el;
// }

// var render = function(todoList) {

//     var todoListElement = document.getElementById("todo-list");

//     for (i in todoList) {
//         var aTodo = todoList[i];
//         var todoElement = createTodoElement(aTodo);
//         todoListElement.appendChild(todoElement);
//     }
// }

// window.onload = function() {
//     var todoList = [
//         new Todo({ text: "Do those dishes man"}),
//         new Todo({ text: "hand out washing"}),
//         new Todo({ text: "learn js"}),

//     ];

//     render(todoList);
// };





