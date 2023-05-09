const path = require('path');
const express = require('express');
const session = require('express-session');
const http = require('http');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();


const server = http.createServer(app)
const io = require('socket.io')(server);
app.use(session(sess));

// Import the custom helper methods
// const helpers = require('./utils/helpers');

const PORT = process.env.PORT || 3001;

// Incorporate the custom helper methods
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});
sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log('Now listening'));
});













