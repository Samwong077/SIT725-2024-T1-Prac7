<script src="/socket.io/socket.io.js"></script>
let socket = io();
socket.on('number', (msg)=>{
    console.log('Ramdom number: ' + msg);
})