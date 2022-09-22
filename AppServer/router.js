var authController=require('./controllers/authcontroller');
var userController=require('./controllers/usercontroller');


module.exports=function(app){
    app.route('/api/users')
            .get(userController.Users) 
            .post(userController.InsertUser) 
            
    app.route('/api/users/:id')
             .delete(userController.RemoveUser)  
             .get(userController.UserById)  
             .put(userController.UpdateUser) 

    app.route('/api/login')
            .post(authController.login);
    app.route('/api/register')
            .post(authController.register);
};
