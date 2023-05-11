const express = require('express');
const session = require('express-session');
const http = require('http');
const routes = require('./controllers');
const path = require('path')
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
const server = http.createServer(app)
const io = require('socket.io')(server);
app.use(session(sess));
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    
    //object with message inside of it with an id
    //io.to(user1.id).to(user2.id).emit('startChat', [user1.userId, user2.userId]);
   
    //if statement where you emit to certain person if there ids paired
    //if (user1==user2) {
     // console.log('Message:',);
    ///} else {
   //
    //save messages to models
    
    
    
    io.emit('chat message', msg);
  });
});
sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log('Now listening'));
}).catch (err => {
  console.log(err)
});