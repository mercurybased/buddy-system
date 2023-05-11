const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

router.get("/", (req, res) => {
    res.render("home", {
        logged_in: req.session.logged_in
    })
})
// Post.findAll({
//     include: [User]
// }).then(postData => {
//     const hbsData = postData.map(post => post.get({ plain: true }));
//     console.log(hbsData);
//     res.render("home", {
//         allPosts: hbsData,
//         logged_in: req.session.logged_in
//     })
// })
// })

router.get("/chat", (req, res) => {
    res.render("chat", {
        logged_in: req.session.logged_in
    })
})
router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        return res.redirect("/profile")
    }
    res.render("login", {
        logged_in: req.session.logged_in
    })
})
router.get("/signup", (req, res) => {
    res.render("signup", {
        logged_in: req.session.logged_in
    })
})
router.get("/search", (req, res) => {
    res.render("search", {
        logged_in: req.session.logged_in
    })
})

router.get("/profile", async (req, res) => {
    console.log(req.session)
    if (!req.session.logged_in) {
        return res.redirect("/login")
    }
    // check who is logged in from req.session
    const userId = req.session.user_id
    // find that user (and all of their data)
    const userData = await User.findByPk(userId, {
        include: { all: true, nested: true }
    })
    const user = userData.get({ plain: true })
    console.log(user)
    // render profile, and send the userData
    res.render("profile", {
        userData: user
    })
})

// 
router.get('/logout', (req, res) => {
    console.log("loggin out!!")
    try {
        res.render("logout", {
            logged_in: req.session.logged_in
        })
        req.session.destroy()
        res.status(200).json({ msg: "logged out successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router;