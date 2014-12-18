var App = function() {}

App.prototype.boot = function() {
    this.pullInitialData();
}

App.prototype.pullInitialData = function() {
    alert("Pulling data from " + this.dataURL)
}

var puppy = new App();
puppy.dataURL = "http://localhost:3000/puppies";
puppy.boot();

