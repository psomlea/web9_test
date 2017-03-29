$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    var loginBtn = $("#login_btn");
    loginBtn.on("click", function() {
        var emailValue = $("[name='user_email']").val();
        var passValue =$("[name='user_password']").val();
        
        var loginModel = new Login({
            email: emailValue,
            pass: passValue
        });
        var loginReq = loginModel.signIn();
        loginReq.done(redirectUserToArticlesPage)
    });
    function redirectUserToArticlesPage() {
    if (loginModel.isLogged) {
            window.location.href = "web9-paulsomlea.c9users.io/exercitii/blog_start/UI/pages/articles.html"
        } else {
            alert("Login failed");
        }
}
}