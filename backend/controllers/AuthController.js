require('dotenv').config();
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors');
const User = require('../models/user');

const checkLogin = async (req, res) => {
    if (!isValidBody(req)) {
        return res.status(400).json({
            status: false,
            message: "Dados não informados"
        });
    }

    cors();
    const dados = { ...req.body };
    const now = Math.floor(Date.now() / 1000);
    const user = await User.findOne({
        where: {
            email: dados.email
        }
    });

    if (!user)
        return res.status(401).json({
            status: false,
            message: "Usuário ou senha incorretos."
        })

    const isMatch = bcrypt.compareSync(req.body.password, user.password)
    if (!isMatch) return res.status(401).json({
        status: false,
        message: "Usuário ou senha incorretos."
    });

    const payload = {
        id: user.id,
        login: user.email,
        name: user.name,
        iat: now,
        exp: now + (60 * 60 * 12),
        success: true,
        status: true,
    }

    res.json({
        ...payload,
        token: jwt.encode(payload, process.env.AUTH_SECRET)
    })
}

function isValidBody(request) {
    return !request.body || typeof request.body === "undefined" || (request.body.email && request.body.password)
}

module.exports = checkLogin;