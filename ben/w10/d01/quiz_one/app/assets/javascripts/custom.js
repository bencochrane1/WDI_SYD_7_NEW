$(function() {
    $("button").on('click', function() {
        $("h1").text("Comp-Sigh");
        $('body').addClass("pink");
        $('button').prop('disabled','disabled');
    });
});


