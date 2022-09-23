var authController = require('./controllers/authcontroller');
var userController = require('./controllers/usercontroller');


module.exports = function (app) {
        app.route('/api/users')
                .get(userController.Users)
                .post(userController.InsertUser)

        app.route('/api/users/:id')
                .delete(userController.RemoveUser)
                .get(userController.UserById)
                .put(userController.UpdateUser)

        app.route('/api/products')
                .get(userController.Products)
                .post(userController.InsertProduct)

        app.route('/api/products/:id')
                .delete(userController.RemoveProduct)
                .get(userController.ProductById)
                .put(userController.UpdateProduct)

        app.route('/api/wishlist')
                .post(userController.InsertWishlist)
                .get(userController.Wishlist)
         
        app.route('/api/wishlist/:id')
                .delete(userController.RemoveWishlist)
        
        app.route('/api/orders')
                .post(userController.InsertOrders)
                .get(userController.Orders)

        app.route('/api/orders/:id')
                .delete(userController.RemoveOrders)
                .put(userController.UpdateOrders)

        app.route('/api/login')
                .post(authController.login);
        app.route('/api/register')
                .post(authController.register);
};
