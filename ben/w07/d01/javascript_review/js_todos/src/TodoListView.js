var TodoListView = function() {};


TodoListView.prototype.render = function(todos) {
    for (i in todos) {
    var todoView = new TodoView(todos[i]);
    var todoViewElement = todoView.render();
    this.container.appendChild(todoViewElement);
    }
};
