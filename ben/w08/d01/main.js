$(function() {
    $("#press_me").on("click", function() {
        var $content = $("#content");

        $content.text("This is some text");
    });
});