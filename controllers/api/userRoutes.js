const router = require("express").Router();
const { User, Interest } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: { all: true, nested: true },
    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// /api/users/aaskhflkrgh
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findOne({
      include: { all: true, nested: true },
      where: {id:req.params.id}
    });
    if(userData) {
      res.status(200).json(userData);
    } else{
      res.status(400).json({msg:"no user found"})
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const interest = await Interest.findOne({where: {interest: req.body.interest}})
    let newInterest;
    if (!interest){
      newInterest = await Interest.create({
        // user_id: newUser.id
        interest: req.body.interest,
      });   
    }
    const newUser = await User.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      biography: req.body.biography,
      photoUrl: req.body.url,
      interest_id: interest?.id || newInterest.id
    });
      req.session.user_id = newUser.id;
      req.session.email = newUser.email;
      req.session.logged_in=true;
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/profile", async (req, res) => {
  try {
    console.log(req.session);
    await User.update({ photoUrl: req.body.photoUrl }, { where: { id: req.session.user_id } });
    const user = await User.findOne({ where: { id: req.session.user_id } });
    console.log(user)
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
router.put("/profile/bio", async (req, res) => {
  try {
   
    // await User.update({ biography: req.body.biography }, { where: { id: req.session.user_id } });
    const user = await User.update({ biography: req.body.biography }, { where: { id: req.session.user_id } });
    console.log(user)
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//changing interest on profile, creates new interest if the input doesn't exist
router.post("/profile/interest", async (req, res) => {
  try {
  const interest = await Interest.findOne({interest: req.body.interest},  {where: { id: req.session.user_id }})
    let newInterest;
    if (!interest){
      newInterest = await Interest.create({
        // user_id: newUser.id
        interest: req.body.interest,
      });   
    };
    res.status(200).json(newInterest);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//changes interest to one that exists already
router.put("/profile/interest", async (req, res) => {
  try {   
    await User.update({ interest: req.body.interest }, { where: { id: req.session.user_id } });
    const user = await User.update({ interest: req.body.interest }, { where: { id: req.session.user_id } });
    console.log(user)
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});



router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });

      return;
    }    
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.userName =  userData.firstName;
      req.session.logged_in = true;
      
    res.json({ user: userData, message: "You are now logged in!" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
