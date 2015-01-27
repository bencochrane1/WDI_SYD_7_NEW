// //Global Variables

// //Time that increments in the game
// var timerId = 0,
//     time = 0;

// //arrays with letters in them.
// var lettersSmall  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
//     lettersMedium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
//                      'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'],
//     lettersLarge  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
//                      'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
//                      'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
//                      'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];

// //array of letters. will change based on size of game.
// var letters = _.shuffle(lettersSmall);

// //last card/letter you clicked on. comes from the letter divs.
// var lastId = '',
//     lastCard = '';

// //Code In Here gets executed once code is ready. ie hovering, clicking events//
// $(function() {

//     $("#game").on("click", "div", function(){
//         var index = parseInt($(this).attr("id"));
//         var whichLetter = letters[index];
//         $(this).text(whichLetter);
//     });

//     $("#small").on("click", function(){
//         var $game = $("#game").html("");
//         _.each(letters, function(letter, index){
//             $("<div></div>")
//             .addClass("column")
//             .appendTo($game)
//             .attr("id", index);
//         });  
//     });
    

// });

// // Initializes the game and creates the board
// function startGame() {

// }


// function activate_letter(letter) {
    
// }

// // Flips a card and checks for a match
// function cardClick() {



// }

// //Add hoverclass to cards.
// function hovering() {

// }

// //Start the timer
// function startTime() {

// }

// //Increment the timer and display the new time
// function updateTime() {

// }







// ##################Bochs good code:


//Global Variables

//Time that increments in the game
var timerId = 0,
    time = 0;

//arrays with letters in them.
var lettersSmall  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
    lettersMedium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'],
    lettersLarge  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
                     'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
                     'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];

//array of letters. will change based on size of game.
var letters;

//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {

    var clickedLetters = [];
    var letterIds = [];
    var matchingLetters = [];
    $("#timer").text("Timer: " + 0);

    var small = $("#small");
    var medium = $("#medium");
    var large = $("#large");
    
    var selector;


    $("#controls").on("click", "input", function() {

        var selector = $(this).val().toString().toLowerCase();
        console.log(selector);

        if (selector == "small") {
            letters = lettersSmall;
            var size = small;
            
        } else if (selector == "medium") {
            letters = lettersMedium;
            
        } else {
            letters = lettersLarge;
            
        }

    });


    small.on("click", function(){
        

        var counter = 0;
        var startTime = new Date();
        
        var myInterval = setInterval(function () {
          ++counter;
          $("#timer").text("Timer: " + counter);
            
        }, 1000);
        

        $("#game").empty();
        var letters = _.shuffle(lettersSmall);
        // console.log(letters);

        _.each(letters, function (el, i){
            
            $("#game").append("<span id=" + i + ">" + "<i>" + el + "</i>" + "</span>")
            $("span").addClass("column");
            $("i").addClass("hidden");

        });


        $("span").hover(
            function() {
                $(this).toggleClass("hover");
            }, function() {
                $(this).toggleClass("hover");
            }
            );

        // get a specific letter to show when clicked 
        $("span").on("click", function(){
            


                $("i", this).removeClass("hidden").toggleClass('active');   
                letter_id = $(this).attr('id');
                letter_value = $("i", this).text();
                letterIds.push(letter_id);
                clickedLetters.push(letter_value);

                if (clickedLetters.length == 2 && clickedLetters[0] != clickedLetters[1]) {
        
                    $("i", this).removeClass("hidden").delay(400).queue(function(){
                        $("span:not(.found) .active").addClass("hidden").toggleClass("active");
                    });
                        
                    clickedLetters = []; 
                    letterIds = []; 


                } else if (clickedLetters.length == 2 && clickedLetters[0] == clickedLetters[1]) {

                    matchingLetters.push(letterIds);
                    matchingLetters = _.flatten(matchingLetters);
                    // console.log(matchingLetters);
                    uniqmatches = _.uniq(matchingLetters);

                    $(".active").parent().addClass("found");

                    if (uniqmatches.length == letters.length) {
                        $("span").addClass("won").effect("shake");
                        $("#title").html("You bloody won").addClass("winning").effect("shake");
                        var finishTime = new Date();
                        clearInterval(myInterval);
                        timeTaken = (finishTime - startTime)/1000;
                        $("#timer").text("You won in " + counter + " seconds!");
                        console.log(timeTaken + " seconds to finish the game");

                        $("span").removeClass("active, found").delay(5000).queue(function(){
                                $("#game").empty()
                                $("#title").html("Memory").removeClass("winning");
                                $("#timer").text("");

                        });
                    }

                    clickedLetters = [];
                }                   
        });
    });


});
