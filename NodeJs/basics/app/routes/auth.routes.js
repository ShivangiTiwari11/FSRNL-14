const authController = require('../controller/auth.controller')


module.exports = app =>{
    app.post("/api/register",authController.register);
    app.post("/api/login",authController.login);
   
}