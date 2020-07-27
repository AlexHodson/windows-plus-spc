import express from 'express'

const router = express.Router();

router.post('/', function(req, res, next) {
    const userName = req.body.user;
    const password = req.body.password;
    res.end("yes");
});

export default router;
