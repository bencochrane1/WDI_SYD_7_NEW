

// CONSTRUCTOR
var Person = function(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
}

// INITIALISE A NEW INSTANCE
var myPerson = new Person({name: "Boch", age: 29});

// CREATE A NEW PROTOTYPE OF THIS CLASS 'PERSON'
Person.prototype.walk = function() {
    console.log( this.name + " can walk and is " + this.age );
}

myPerson.walk();