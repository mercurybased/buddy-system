const express = require('express');
const session = require('express-session');
<<<<<<< HEAD
const http = require('http');
=======
const routes = require('./controllers');

>>>>>>> dev
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');

// Import the custom helper methods
// const helpers = require('./utils/helpers');
const session = require('express-session');

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static("public"))

app.use(routes);

sequelize.sync({ force: false }).then(() => 
{
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
}
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD

app.use(routes);
=======
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
>>>>>>> dev

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});
sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log('Now listening'));
});
<<<<<<< HEAD













=======


app.listen(PORT, () => {
  console.log('Now listening')
  sequelize.sync({ force: false })
});
>>>>>>> dev
