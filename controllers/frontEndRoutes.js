const express = require('express');
const router = express.Router();
const { User, Interest } = require('../models');

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
router.get("/session", async (req, res) => {
  res.json(req.session);
});

router.get("/chat", (req, res) => {
    res.render("chat", {
        backgroundImage: "url(/Assets/greenLeaf.png)", 
        userData: {firstName:req.session.userName},
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
// router.get("/search", (req, res) => {
//     res.render("search", {
//         logged_in: req.session.logged_in
//     })
// })

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
        backgroundImage: "url(/Assets/linen.png)", 
        userData: user,
        logged_in: req.session.logged_in
    })
})

// 
router.get('/logout', (req, res) => {
    console.log("loggin out!!")
    try {
        res.render("logout")
        req.session.destroy()
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
  });
  
  router.get('/search/:searchTerm', (req, res) => {
    let term = req.params.searchTerm;
    term = term.toLowerCase();
    Interest.findAll({ where: { Interest:term }, include: {model: User} })
      .then(interests => {
        const mappedData = interests.map(interest => interest.get({ plain: true }));
        console.log(mappedData[0].users);
        res.render("search", { users: mappedData[0].users, searchTerm:term });
      })
      .catch(err => console.log(err));
  });
module.exports = router;