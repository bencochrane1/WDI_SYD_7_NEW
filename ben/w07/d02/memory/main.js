$(function(){


$(window).on("click", function(){
    $.getJSON("http://headers.jsontest.com/", function(result){
        $("<p>" + result.Host + "</p>").appendTo($("#todo-list"));
    });    
});

    $("#todo").on("keypress", function(event){
        if (event.which === 13 && $(this).val() !== "") {
            var todoText = $(this).val();

            var $todo = $("<p> <span>" + todoText + "</span><input type=\"text\"> <button>x</button></p>");

            $("#todo-list").append($todo);
            $todo.find("input").hide();
            $todo.hide().slideDown('slow');

            $(this).val(""); 
        }
    });
});





$("#todo-list").on("keypress", "p input", function(event){
    if (event.which === 13 && $(this).val() !== "") {
        var newText = $(this).hide().val();
        $(this).parent().find("span").show().text(newText);
    }
});


$("#todo-list").on("focusout", "input", function(event){
    var newText = $(this).hide().val();
    $(this).parent().find("span").show().text(newText);
});


$("#todo-list").on("dblclick", "p", function(){
    var todoText = $(this).find("span").hide().text();
    $(this).find("input").show().val(todoText);
    $("input").focus();

});


$("#todo-list").on("click", "p button", function(){
    $(this).parent().slideUp(1000, function(){
        $(this).remove();
    });
});


// $(function() {
//     $("#click-me").on("click", function(){
//         $("#put-text-here").text("Here's the new text!");
//         $("#click-me").text("Hey you clicked this!");
//         $(this).fadeOut(2000);
//     });
// });


















// var Todo = function(text){
//     this.text = text;
//     this.createdAt = new Date();
// }

// window.onload = function () {
//     var todos = [
//     new Todo("do the dishes please"),
//     new Todo("do the ironing"),
//     new Todo("put the bins out")
//     ];

//     var templateString = _.unescape(document.getElementById("todo-template").innerHTML);

//     var todoTemplate = _.template(templateString);

//     _.each(todos, function(todo){
//         document.getElementById("container").innerHTML += todoTemplate(todo);    
//     })
// }








// window.onload = function(){

//     var templateString = _.unescape(document.getElementById("hello-template").innerHTML);

//     var helloWorldTemplate = _.template(templateString);
//     var theHTML = helloWorldTemplate({ name: "Ben" });
//     var moreHTML = helloWorldTemplate({ name: "Vito" });

//     document.getElementById("container").innerHTML = theHTML + moreHTML;
// }