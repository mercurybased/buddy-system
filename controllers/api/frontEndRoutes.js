const express = require('express');
const router = express.Router();
const {User, Post} = require('../models');

router.get("/",(req,res)=>{
    Post.findAll({
        include:[User]
    }).then(postData=>{
        const hbsData = postData.map(post=>post.get({plain:true}));
        console.log(hbsData);
        res.render("home",{
            allPosts:hbsData,
            logged_in: req.session.logged_in
        })
    })
})


router.get("/login",(req,res)=>{
    // if(req.session.logged_in){
    //     return res.redirect("/profile")
    // }
    res.render("login",{
        logged_in:req.session.logged_in
    })
})
router.get("/signup",(req,res)=>{
    res.render("signup",{
        logged_in:req.session.logged_in
    })
})
module.exports = router;