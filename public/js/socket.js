var socket = io();

var messages = document.getElementById('messages');
var saveBtn = document.getElementById('saveBtn');
var input = document.getElementById('message');

saveBtn.addEventListener('click', function(e) {
 
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  //window.scrollTo(0, document.body.scrollHeight);
});