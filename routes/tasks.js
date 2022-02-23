import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const Schema = mongoose.Schema;

export const taskSchema = new Schema({
  taskInstructions: { type: String, required: false },
  taskBenefits: { type: String, required: false },
});

// Posts a new task to the Mongo DB
router.post('/', async (req, res) => {
  let newTask = new mongoose.model(
    `${req.body.taskType}${req.body.taskDuration}`,
    taskSchema
  )({
    taskInstructions: req.body.taskInstructions,
    taskBenefits: req.body.taskBenefits,
  });
  await newTask.save();
  res.redirect('/tasks');
});

// Gets all the existing tasks of a specific type and duration from the Mongo DB
router.get('/:tasktype/:taskduration', async (req, res) => {
  let taskType = String(req.params.tasktype);
  let taskDuration = String(req.params.taskduration);

  if (
    (taskType === 'onscreen' || taskType === 'offscreen') &&
    (taskDuration === 'short' ||
      taskDuration === 'medium' ||
      taskDuration === 'long')
  ) {
    const allTasks = await new mongoose.model(
      `${taskType}${taskDuration}`,
      taskSchema
    ).find();
    res.json({
      success: true,
      payload: allTasks,
    });
  } else {
    res.status(404).json({ message: 'No URL path found' });
  }
});

export default router;
