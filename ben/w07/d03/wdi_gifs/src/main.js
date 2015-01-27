var tags;




// function that grabs each gif in the list of gifs and renders them as a gif image
var renderGifList = function(gifs) {
    var gifString = "";
    _.each(gifs, function(gif) {
        gifString += "<img src=" + gif.url + "</img>";
    });

    //renders all gifs as a gif image into the html of the content id
    $("#content").html(gifString);
};


var clickedTag = function(tagName) {
        $.getJSON("http://www.gifbase.com/tag/" + tagName + "?format=json", function(data) {
        renderGifList(data.gifs);
    });
};


//lists out the alphabet as a list of links
var renderNavigation = function() {

    var letters = "abcdefghijklmnopqrstuvwxyz#".split("");
    var navigation = "";

    _.each(letters, function(letter) {
        navigation += "<a>" + letter + "</a>";
    });

    $("nav").html(navigation);

};


// shows all of the tags in a set of individual divs
var renderTagList = function(tags) {
    console.log("WHAT THE FUCK THEN?", tags);
    var listString = "";
    _.each(tags, function(tag) {
        listString += "<div class=\"tag\">" + tag + "</div>";
    });
    console.log(listString);
    // add in each tag into the content id area
    $("#content").html(listString);
};



$(function(){


    // in the nav area, when someone clicks a link from the alphabet
    // filtered tags gives back only the tagnames that have the first
    // that is the same as the link 'a' that was clicked

    $("nav").on("click", "a", function() {
        var self = this;

        var filteredTags = _.filter(tags, function(tag) {
            return $(self).text() === tag[0];

        });

        // this inputs only the tags that start with the letter clicked
        // and runs the function that shows all of the tags in a div

        renderTagList(filteredTags);
    }); 


    // gets the JSON of all tagnames from the gif base API
    // 
    $.getJSON("http://www.gifbase.com/js/tags.json", function(data) {
        tags = data;
        // this shows all of the tags in their own div on the page with the 'data' from the API
        renderTagList(data);

        // this shows the nav links which is the alphabet
        renderNavigation(data);
    });

    // when I click a tagname div, run clickedTag which fills the div with id of content with a
    // heap of gifs for the tag name that was clicked
    $("#content").on("click", "div", function() {
        tagName = $(this).text();
        clickedTag(tagName);

    });




});

