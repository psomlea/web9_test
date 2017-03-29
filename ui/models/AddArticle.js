/* global $ */

// function addTitle () {
//     var title = $("#title");
//     var titleV=title.val();
// }

$(document).ready(onHtmlLoaded);

function onHtmlLoaded(){
    
    var articles =[];


$("#submit").on("click", function(){
    var article = {
        title: $("#title").val(),
        content: $("#content").val(),
    };
    
    articles.push(article);
    $("#commentList").append("<p> Title=" + article.title + "Content= " + article.content + "</p>");
    
    
});


}