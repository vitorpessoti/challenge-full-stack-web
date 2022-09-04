module.exports = app => {
    app.route('/auth/login')
        .post(app.controllers.AuthController.checkLogin)

    // app.route('/auth/me/:id')
    //     .all(app.config.passport.authenticate())
    //     .post(app.controllers.AuthController.me)
}