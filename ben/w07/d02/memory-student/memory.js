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
var letters,
    contval;

//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {

    var clickedLetters = [];
    var letterIds = [];
    var matchingLetters = [];


    var small = $("#small");
    var medium = $("#medium");
    var large = $("#large");
    

    // $("#controls").on("click", "input", function(){
    //     contval = $("#"+this.val());
    //     if ($(this).val() == "small") {
    //         letters = lettersSmall;
    //     } else if ($(this).val() == "medium") {
    //             letters = lettersMedium;
    //     } else {
    //         letters = lettersLarge;
    //     }
    //     console.log(letters);
    // });

    small.on("click", function(){
        $("#game").empty();
        var letters = _.shuffle(lettersSmall);

        _.each(letters, function (el, i){
            
            $("#game").append("<span id=" + i + ">" + "<i>" + el + "</i>" + "</span>")
            $("span").addClass("column");
            $("i").addClass("hidden");

        });


        // get a specific letter to show when clicked 
        $("span").on("click", function(){
            
            
                $("i", this).removeClass("hidden").addClass('active');   
                letter_id = $(this).attr('id');
                letter_value = $("i", this).text();
                letterIds.push(letter_id);
                clickedLetters.push(letter_value);

                console.log(clickedLetters);
                console.log(letterIds);
                

                if (clickedLetters.length == 2 && clickedLetters[0] != clickedLetters[1]) {
        
                    $("i", this).removeClass("hidden").delay(1000).queue(function(){
                        console.log("sdiosdoihdoi")
                        $("span:not(.found) .active").addClass("hidden");
                        // _.each(clickedLetters, function(el, i){
                        //     // console.log(i);
                        //     $("#"+i).addClass("hidden").dequeue();    
                        // });
                        // console.log(clickedLetters);
                        
                    });
                        
                    clickedLetters = []; 
                    letterIds = []; 

                } else if (clickedLetters.length == 2 && clickedLetters[0] == clickedLetters[1]) {

                    matchingLetters.push(letterIds);
                    matchingLetters = _.flatten(matchingLetters);
                    // console.log(matchingLetters);
                        
                    $(".active").parent().addClass("found");
                    // console.log(this);
                    // _.each(matchingLetters, function(el, i){
                    //     console.log(el);
                    //     $("#"+el).addClass("found");
                        
                        
                    // });

                    clickedLetters = []; 
                    letterIds = []; 
                    // console.log("there is a match" + letterIds);
                    // // $("span").addClass("found");
                    // matchingIds.push(letterIds);
                    // console.log(matchingIds);
                }

                
                
                              
        });




    });





    // medium.on("click", function(){
    //     $("#game").empty();
    //     var letters = lettersMedium;

    //     _.each(letters, function (el, i){
            
    //         $("#game").append("<span id=" + i + ">" + el + "</span>");
    //         $("span").addClass("column");

    //     });

    // });

    // large.on("click", function(){
    //     $("#game").empty();
    //     var letters = lettersLarge;

    //     _.each(letters, function (el, i){
            
    //         $("#game").append("<span id=" + i + ">" + el + "</span>");
    //         $("span").addClass("column");

    //     });

    // });



});

// Initializes the game and creates the board
function startGame() {

}


function activate_letter(letter) {
    letter.addClass('active');
}

// Flips a card and checks for a match
function cardClick() {

    var letter = $(this);

    activate_letter(letter);


}

//Add hoverclass to cards.
function hovering() {

}

//Start the timer
function startTime() {

}

//Increment the timer and display the new time
function updateTime() {

}