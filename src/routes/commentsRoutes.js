const express = require('express');
const scheme = require("../models/commentsModel");

const router = express.Router();

router.post('/comment', async (req, res) => {
    const comment = scheme(req.body);
    try {
        const data = await comment.save();
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/comment', async (req, res) => {
    try {
        const data = await scheme.find();
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/comment/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const data = await scheme.find({ email: email });
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

router.put('/comment/:email', async (req, res) => {
    const { email } = req.params;
    const { comment, calification } = req.body;
    try {
        const data = await scheme.updateOne({ email: email }, { $set: { comment, calification } });
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

router.delete('/comment/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const data = await scheme.deleteOne({ email: email });
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;