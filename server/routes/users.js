import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('<h1>Testing Users GET</h1>');
});

router.post('/add', (req, res) => {
  console.log(req.body);
  res.status(201);
  res.send('<h1>Testing Users POST</h1>');
  // res.json(JSON.stringify({ status: 201, message: 'Received POST req' }));
});

router.put('/update', (req, res) => {
  res.status(204);
  res.send('<h1>Testing Users PUT</h1>');
  res.json(JSON.stringify({ status: 204, message: 'Received PUT req' }));
});

router.delete('/delete', (req, res) => {
  res.status(204);
  res.send('<h1>Testing Users DELETE</h1>');
  res.json(JSON.stringify({ status: 204, message: 'Received DELETE req' }));
});

export default router;
