let events = require('events');

let myEmit = new events.EventEmitter();

myEmit.on('someEvent', function (m) {
    console.log(m);
});

myEmit.on('someEvent2', function (m) {
    console.log('lolok');
});

myEmit.emit('someEvent2', 'the event was emitted');