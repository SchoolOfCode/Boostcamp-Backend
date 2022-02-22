import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const Schema = mongoose.Schema;

export const taskSchema = new Schema({
  taskInstructions: { type: String, required: false },
  taskBenefits: { type: String, required: false },
});

// Gets all the Onscreen Short Tasks from the Mongo DB
router.get('/onscreen/short', async (req, res) => {
  const allOnScreenShort = await new mongoose.model(
    'OnScreenShort',
    taskSchema
  ).find();
  res.json({
    success: true,
    payload: allOnScreenShort,
  });
});

// Gets all the Onscreen Medium Tasks from the Mongo DB
router.get('/onscreen/medium', async (req, res) => {
  const allOnScreenMedium = await new mongoose.model(
    'OnScreenMedium',
    taskSchema
  ).find();
  res.json({
    success: true,
    payload: allOnScreenMedium,
  });
});

// Gets all the Onscreen Long Tasks from the Mongo DB
router.get('/onscreen/long', async (req, res) => {
  const allOnScreenLong = await new mongoose.model(
    'OnScreenLong',
    taskSchema
  ).find();
  res.json({
    success: true,
    payload: allOnScreenLong,
  });
});

// Gets all the Offscreen Short Tasks from the Mongo DB
router.get('/offscreen/short', async (req, res) => {
  const allOffScreenShort = await new mongoose.model(
    'OffScreenShort',
    taskSchema
  ).find();
  res.json({
    success: true,
    payload: allOffScreenShort,
  });
});

// Gets all the Onscreen Medium Tasks from the Mongo DB
router.get('/offscreen/medium', async (req, res) => {
  const allOffScreenMedium = await new mongoose.model(
    'OffScreenMedium',
    taskSchema
  ).find();
  res.json({
    success: true,
    payload: allOffScreenMedium,
  });
});

// Gets all the Onscreen Long Tasks from the Mongo DB
router.get('/offscreen/long', async (req, res) => {
  const allOffScreenLong = await new mongoose.model(
    'OffScreenLong',
    taskSchema
  ).find();
  res.json({
    success: true,
    payload: allOffScreenLong,
  });
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

export default router;
