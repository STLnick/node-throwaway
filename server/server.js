import express from 'express';

import users from './routes/users';

const app = express();

const port = 5000;

app.use('/users', users);

app.listen(port);

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

// app.get('/users/:userid', (req, res) => {
//   res.send(req.params);
// });

// app.listen(port, () => {
//   console.log('server is listening!');
// });
