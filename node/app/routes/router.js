const express = require('express')
const router = express.Router()

const port = process.env.port || 3005

// All routes
router.get('/api', (req, res) => {
    res.json({
        'All users': `http://localhost:${port}/api/user`
    })
})

router.use('/api/user', require('./api/userRoutes'))

router.get('*', (req, res) => {
    if (req.url === '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 Error.  This page does not exist</h1>')
    }
})

module.exports = router