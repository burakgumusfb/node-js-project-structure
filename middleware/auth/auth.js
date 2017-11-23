function authChecker(req, res, next) {
    if (req.session.auth == "success") {
        next();
    } else {
       req.session.auth = "success"; 
       res.redirect("/auth");
    }
}
module.exports = 
{
    authChecker:authChecker
}