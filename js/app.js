$(document).ready(function(){
    $(".about-wrapper > .col > .video > .thumb").click(function(){
        $(this).addClass("active");
        $(this).next().attr("controls", "");
    });
});