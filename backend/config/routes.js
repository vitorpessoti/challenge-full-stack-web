module.exports = app => {
    app.route('/auth/login')
        .post(app.controllers.AuthController.checkLogin)

    // app.route('/auth/me/:id')
    //     .all(app.config.passport.authenticate())
    //     .post(app.controllers.AuthController.me)

    app.route('/students')
        .all(app.config.passport.authenticate())
        .get(app.controllers.StudentController.index)
        .post(app.controllers.StudentController.store)

    app.route('/students/:ra')
        .all(app.config.passport.authenticate())
        .put(app.controllers.StudentController.update)
        .delete(app.controllers.StudentController.destroy)
}