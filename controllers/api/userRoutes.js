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
    const newUser = await User.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      biography: req.body.biography,
      photoUrl: req.body.url,
    });
    const newInterest = await Interest.create({
      user_id: newUser.id,
      interest: req.body.interest,
    });   
      req.session.userId = newUser.id;
      req.session.email = newUser.email;
      req.session.logged_in=true;
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/session", async (req, res) => {
  res.json(req.session);
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
      req.session.logged_in = true;
      
    res.json({ user: userData, message: "You are now logged in!" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
