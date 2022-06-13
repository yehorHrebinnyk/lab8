window.onload = () => {
  const socket = io("/chat");
  const user_name = prompt('YOUR NICKNAME: ');

  $('form').submit(e => {
      e.preventDefault(); // prevents page reloading
      socket.emit('send message', {'message': $('#m').val(), 'username': user_name});
      $('#m').val('');
      return false;
  });
  socket.on('new message', data => {
      let message = data.message;
      let sender_username = data.username;
      $('#messages').append($('<li>').text(sender_username.concat(': ', message)));
  });
};