export default class userController{
    getRegister(req, res){
        res.render('register');
    }
    getLogin(req, res){
        res.render('login')
    }
}