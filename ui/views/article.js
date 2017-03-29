/*  global $ */
/*  global Article */
$(document).ready(onHtmlLoaded);

function onHtmlLoaded () {
    var article = new Article({
        title: "titlu",
        content: "Lorem ipsum dolor sit amet bla bla bla",
    });
            
    var containerElem = $("#container");
    generateArticleTitle(article.title);
    generateArticleContent(article.content);
    
    /* generate title in h2 */
    function generateArticleTitle(articleTitle){
        var titleElem = $ ("<h2></h2");
        titleElem.html(articleTitle);
        containerElem.append(titleElem);
    }
    
     /* generate article content */
    function generateArticleContent(articleContent){
        var contentElem = $ ("<article></article");
        contentElem.html(articleContent);
        containerElem.append(contentElem);
    }
}


