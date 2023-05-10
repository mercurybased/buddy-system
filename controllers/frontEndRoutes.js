const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

router.get("/", (req, res) => {
    Post.findAll({
        include: [User]
    }).then(postData => {
        const hbsData = postData.map(post => post.get({ plain: true }));
        console.log(hbsData);
        res.render("home", {
            allPosts: hbsData,
            logged_in: req.session.logged_in
        })
    })
})

router.get("/chat" ,(req,res)=>{
    res.render("chat" ,{
        logged_in:req.session.logged_in     
    })
})
router.get("/login",(req,res)=>{
    // if(req.session.logged_in){
    //     return res.redirect("/profile")
    // }
    res.render("login", {
        logged_in: req.session.logged_in
    })
})
router.get("/signup", (req, res) => {
    res.render("signup", {
        logged_in: req.session.logged_in
    })
})

router.get("/profile", (req, res) => {
    var projects = [
        {
            name: "Wilma",
            interest: ["boldering", "rock climbing", "walking the dinosaur"],
            biography: "married young, raising a rockhead"
        }
    ]



    res.render("profile", {
        logged_in: req.session.logged_in,
        projects
    })
})
module.exports = router;