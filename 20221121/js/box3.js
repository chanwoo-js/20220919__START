$(document).ready(function () {
    $("#toggle_btn").click(function () {
        $("#toggle_box").toggle(1000);
    })
    $("#slide_btn").click(function () {
        $("#slide_box").slideToggle(1000);
    })
    $("#fade_btn").click(function () {
        $("#fade_box").fadeToggle(1000);
    })
});