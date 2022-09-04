const consign = require('consign')
const express = require('express');
const cors = require('cors');

function createServer() {
    const app = express();
    app.use(express.json());

    if (process.env.NODE_ENV === "development") {
        app.use(cors());
    }

    consign({
        verbose: false
    })
        .include('./config/passport.js')
        .then('./controllers')
        .then('./config/routes.js')
        .into(app);

    return app;
}

module.exports = createServer;