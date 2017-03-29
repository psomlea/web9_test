/*global newDate*/
function Comment(properties) {
    this.content=properties.content ||"";
    this.author=properties.author || "";
    this.timeStamp=properties.timeStamp ||"";
}
    Comment.prototype.SaveComment = function(commentData){
    console.log(commentData);
};


