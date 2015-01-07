var TodoApp = function() {
    this.todos = [
    new Todo({text: "Do the dishes man"}),
    new Todo({text: "Do the ironing"}),
    new Todo({text: "Get the groceries"})
    ];
};

TodoApp.prototype.start = function() {
    var todoListView = new TodoListView();
    todoListView.container = document.getElementById("todo-list");
    todoListView.render(this.todos);
};

