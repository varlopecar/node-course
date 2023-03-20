const jwt = require('jsonwebtoken');
const User = require('./models/user.model');

const auth = async (req, res, next) => {
    try {
        const header = req.headers['authorization']
        const token = header && header.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403)
            }
            req.user = user
            next()
        }
        )
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

module.exports = auth;
