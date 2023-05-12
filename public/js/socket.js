var socket = io();

var messages = document.querySelector('.messages');
var saveBtn = document.getElementById('saveBtn');
var input = document.getElementById('message');

saveBtn.addEventListener('click', function(e) {
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

// socket.broadcast.emit("greyMessage", msg);

socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  //window.scrollTo(0, document.body.scrollHeight);
});

// leave button 
const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)

// alivia's testing code
// var socket = io();

// var messages = document.getElementById('messages');
// var form = document.getElementById('form');
// var input = document.getElementById('input');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   if (input.value) {
//     socket.emit('chat message', input.value);
//     input.value = '';
//   }
// });

// socket.on('chat message', function(msg) {
//   var item = document.createElement('li');
//   item.textContent = msg;
//   messages.appendChild(item);
//   window.scrollTo(0, document.body.scrollHeight);
// });

// const chatForm = document.getElementById("chat-form");

// //FUNCTION TO CATCH MESSAGES EMITTED FROM SERVER
// socket.on("message", (message) => {
//     console.log(message);

//     outputMessage(message);
// });

// //MESSAGE SUBMIT
// saveBtn.addEventListener("click", function(e) => {
//     e.preventDefault();

//     //get chat message from DOM
//     const msg = e.target.elements.input.value;

//     //emit chat message to server
//     socket.emit("chat message", msg);
//     msg = '';

//     //clear field
//     chatForm.reset();
// });

// //OUTPUT MESSAGE TO DOM FUNCTION
// function outputMessage(message) {
//     const item = document.createElement("div");
//     item.classList.add("chat-row");
//     item.innerHTML = `
//     <div class="bubble-right--container">
//         <div class="chat-bubble chat-bubble--right">
//         ${message}
//         </div>
//         <p class="meta">20.18</p>
//     </div>`;

//     document.getElementById("messages").appendChild(div);
// }

// socket.on("chatMessage", (msg) => {
//   socket.broadcast.emit("greyMessage", msg);
//   socket.emit("blueMessage", msg);
// });

// //CATCH GREY MESSAGES
// socket.on("greyMessage", (message) => {
//   outputGreyMessage(message);
// });

// //CATCH BLUE MESSAGES
// socket.on("blueMessage", (message) => {
//   outputBlueMessage(message);
// });


// const chatForm = document.getElementById('message');
// const chatMessages = document.querySelector('.chat-messages');
// const roomName = document.getElementById('room-name');
// const userList = document.getElementById('users');

// // Get username and room from URL
// // const { username, room } = Qs.parse(location.search, {
// //   ignoreQueryPrefix: true,
// // });

// // Join chatroom
// // socket.emit('joinRoom', { username, room });

// // Get room and users
// // socket.on('roomUsers', ({ room, users }) => {
// //   outputRoomName(room);
// //   outputUsers(users);
// // });

// // Message from server
// socket.on('message', (message) => {
//   console.log(message);
//   outputMessage(message);

//   // Scroll down
//   chatMessages.scrollTop = chatMessages.scrollHeight;
// });
  
// // Message submit
// saveBtn.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Get message text
//   let msg = e.target.elements.msg.value;

//   msg = msg.trim();

//   if (!msg) {
//     return false;
//   }

//   // Emit message to server
//   socket.emit('chatMessage', msg);

//   // Clear input
//   e.target.elements.msg.value = '';
//   e.target.elements.msg.focus();
// });

// // Output message to DOM
// function outputMessage(message) {
//   const div = document.createElement('div');
//   div.classList.add('message');
//   const p = document.createElement('p');
//   p.classList.add('meta');
//   p.innerText = message.username;
//   p.innerHTML += `<span>${message.time}</span>`;
//   div.appendChild(p);
//   const para = document.createElement('p');
//   para.classList.add('text');
//   para.innerText = message.text;
//   div.appendChild(para);
//   document.querySelector('.chat-messages').appendChild(div);
// }

// // Add room name to DOM
// function outputRoomName(room) {
//   roomName.innerText = room;
// }

// // Add users to DOM
// function outputUsers(users) {
//   userList.innerHTML = '';
//   users.forEach((user) => {
//     const li = document.createElement('li');
//     li.innerText = user.username;
//     userList.appendChild(li);
//   });
// }

//Prompt the user before leave chat room
