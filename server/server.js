import cors from 'cors';
import express from 'express';

import users from './routes/users';

const app = express();
// Allows all cors access
app.use(cors());

app.use(express.json());

const port = 5000;

app.use('/users', users);

app.listen(port, () => {
  console.log('Server is listening!');
});
