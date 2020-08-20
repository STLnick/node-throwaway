import express from 'express';
import {
  addNewUser, deleteUser, getUser, getAllUsers, updateUser,
} from '../db';

const router = express.Router();

router.get('/', async (_, res) => {
  res.status(200);
  res.send(await getAllUsers());
});

router.post('/add', async (req, res) => {
  res.status(201);
  res.json(await addNewUser(req.body));
});

// TODO: Pass in correct parameter for updateUser
router.put('/update', async (req, res) => {
  res.status(204);
  res.json(await updateUser());
});

router.delete('/delete', async (req, res) => {
  res.status(204);
  res.json(await deleteUser(req.body));
});

export default router;
