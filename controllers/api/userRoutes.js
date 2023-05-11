const router = require('express').Router();
const { User, Interest } = require('../../models');

router.get('/:id', async (req,res) => {
  try {
    const userData = await User.findAll({ include:  { all: true, nested: true } })
    res.status(200).json(userData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


router.post('/', async (req, res) => {
  try {    
    const newUser = await User.create({
      email:req.body.email,
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      password:req.body.password,
      biography:req.body.biography,
      photoUrl:req.body.url
    });
    const newInterest = await Interest.create({user_id:newUser.id, interest:req.body.interest})
    
    req.session.save( () => {
      req.session.userId = newUser.id,
      req.session.email = newUser.email
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.get("/session", async (req,res)=> {
  res.json(req.session)
})

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
      
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
