const userController = require('../controller/user.controller')


module.exports = app =>{
    app.get("/api/user",userController.findAll);
    app.get("/api/user/:id",userController.findOne);
    app.post("/api/user",userController.create);
    app.get("/api/user/posts/:id",userController.postsById);
   
}