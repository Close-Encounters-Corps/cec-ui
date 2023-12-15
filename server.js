import { handler } from './build/handler.js';
import express from 'express';

const app = express();

app.use(handler);


const server = app.listen(3000, () => {
	console.log('listening on port 3000');
});

process.on('SIGINT', () => {
    console.log('Graceful shutdown.')
    server.close(() => {
        console.log('Server closed.')
    })
})
process.on('SIGTERM', () => {
    console.log('Graceful shutdown.')
    server.close(() => {
        console.log('Server closed.')
    })
})
