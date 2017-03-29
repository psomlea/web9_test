function Article(options){
    this.id = options.id;
    this.title = options.title;
    this.category = options.category || "default topic";
    this.content = options.content;
    this.date = options.date || new Date();
}
Article.prototype.save = function(articleData) {
	//here we should save the new article to server
}
Article.prototype.update = function(data){
    //here we should save the data to the server
    //do an AJAX request or save it in the local storage
};

