import {EventEmitter} from 'events';
const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hello '+name);
}

function goodbyeHandler(name){
    console.log('Goodbye world '+name);
}
//Register event listeners
myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodbyeHandler);
//emit events
myEmitter.emit('greet','John');
myEmitter.emit('goodbye','John');

// Error handling
myEmitter.on('error',(err)=>{
    console.log('An error occured',err);
})
// //simulate error 
// myEmitter.emit('error',new Error('Something went wrong'))