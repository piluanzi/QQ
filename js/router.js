


$(function(){

    // $("#title").load("../page/title/chat-title.html")
    // $("#dynamic").load("../page/dynamic/chat-records.html")



    //切换
    $("#menu-news").click(function() {

        $("#container").load($(this).data("page"))

    })
    $("#menu-people").click(function() {

        $("#container").load($(this).data("page"))

    })
    $("#menu-active").click(function() {

        $("#container").load($(this).data("page"))

    })
    $("#first").click(function() {

        $("#container").load($(this).data("page"))

    })
    $("#friend-dynamic-left").click(function() {

        $("#container").load($(this).data("page"))

    })


})