import express from 'express';
import {
  getShortTasks,
  getMediumTasks,
  getLongTasks,
} from '../models/tasks.js';

const router = express.Router();

router.get('/', async function (req, res, next) {
  const shortTasks = await getShortTasks();

  res.json({
    success: true,
    payload: shortTasks,
  });
});

router.get('/', async function (req, res, next) {
  const mediumTasks = await getMediumTasks();

  res.json({
    success: true,
    payload: mediumTasks,
  });
});

router.get('/', async function (req, res, next) {
  const longTasks = await getLongTasks();

  res.json({
    success: true,
    payload: longTasks,
  });
});

export default router;
