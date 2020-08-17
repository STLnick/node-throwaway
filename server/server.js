import express from 'express';
import { promises as fs } from 'fs';
import http from 'http';
import url from 'url';
import got from 'got';

const app = express();
const router = express.Router();
const port = 5000;

const serveFile = async (url) => {
  console.log(url);
  const file = await fs.readFile(`.${url}`, 'utf-8');
  return file;
};

const serveJSON = async () => {
  const { body } = await got('https://jsonplaceholder.typicode.com/todos');
  return body;
};

// app.route('/users')
//   .get((req, res) => { res.send('Get a user'); })
//   .post((req, res) => { res.send('Add a user'); })
//   .put((req, res) => { res.send('Update a user'); })
//   .delete((req, res) => { res.send('Delete a user'); });

// app.get('/', (req, res) => {
//   fs.readFile('./site/index.html', (err, data) => {
//     const readableData = String(data);
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     res.write(readableData);
//     res.end();
//   });
// });

// app.get('/site/index.html', async (req, res) => {
//   res.statusCode(200);
//   res.setHeader('Content-Type', 'text/html');
//   res.end(await serveFile(req.url));
// });

// // app.get('/users/:userid', (req, res) => {
// //   res.send(req.params);
// // });

// app.listen(port, () => {
//   console.log('server is listening!');
// });

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;

  if (req.url === '/site/index.html') {
    res.setHeader('Content-Type', 'text/html');
    res.end(await serveFile(req.url));
  } else if (req.url === '/site/todos') {
    res.setHeader('Content-Type', 'text/html');
    res.end(await serveJSON());
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log('server is listening!');
});
