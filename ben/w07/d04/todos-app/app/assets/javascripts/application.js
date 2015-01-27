// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {

    $("#add-todo").on("keypress", function(event){
        if (event.keyCode === 13 && $(this).val() !== "")  {
            $.ajax({
                method: "POST",
                url: "/todos",
                dataType: "json", 
                data: {
                    todo: {
                        text: $(this).val()
                    }
                },
                success: function(todo) {
                    $("body").append("<p data-id=\""+ todo.id +"\" class=\"todo\"><span>" + todo.text + "</span><button>Delete</button></p>");
                }
            });
            $("#add-todo").val("");
        }
    });


    $("body").on("click", ".todo button", function(event){

        var removeUrl = "/todos/" + $(this).parent().attr("data-id");
        console.log("it's been clicked");
        var $todo = $(this).parent();
        var thisId = $todo.attr("data-id");
        
        console.log($todo);
        console.log(thisId);
        console.log(removeUrl);


        $todo.hide();


        $.ajax({
            method: "POST",
            url: removeUrl,
            dataType: "json", 
            data: { 
                _method: "DELETE" 
            },
            success: function(data) {
                $todo.fadeOut(1000);
                $todo.remove();        
            }, 
            error: function() {
                alert("hey there was an error on the server");
                $todo.fadeIn(1000);
            }
        });
        event.stopPropagation();
        event.preventDefault();
        
    });


    $("body").on("click", ".todo span", function() {
        var todoURL = "/todos/" + $(this).attr("data-id");
        var self = this;
        // debugger;
        $.getJSON(todoURL, function(todo) {
            
            $(self).append("<div>" + todo.notes + "</div>");
        });
    });


    $.getJSON("/todos", function(todos) {
        $.each(todos, function(index, todo) {
            $("body").append("<p data-id=\""+ todo.id +"\" class=\"todo\"><span>" + todo.text + "</span><button>Delete</button></p>");
        });
    });
});