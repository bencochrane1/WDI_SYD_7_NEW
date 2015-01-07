var vito = function(greeting) {
    console.log(greeting + " Vito");
}

vito("Hello");


// constructors

var Todo = function(attributes) {
    this.text = attributes.text;
    this.createdAt = new Date();
    this.complete = false;
}

var myTodo = new Todo({text: "do the dishes"});

console.log(myTodo.text);

// Objects in javascript == hahes in ruby but act a bit like ruby objects too

var myObject = {
    foo: "hello",
    bar: "what",
    displayHellos: function(){
        console.log(this.foo);
        console.log(this.bar);
    }
};

myObject.displayHellos();

// console.log(Object.keys(myObject))



// Prototype

// .display is a method definition

Todo.prototype.display = function() {
    console.log("Todo: " + this.text + " - created at " + this.createdAt.toLocaleString());
}

myTodo.display();








