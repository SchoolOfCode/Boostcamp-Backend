import express from 'express';
import {
  OnScreenShort,
  OnScreenMedium,
  OnScreenLong,
  OffScreenShort,
  OffScreenMedium,
  OffScreenLong,
} from '../models/schemas.js';

const router = express.Router();

// Mongoose and Mongo Sandbox Routes

// Adds a Onscreen Short Task to the Mongo DB
router.get('/add/onscreen/short', async (req, res) => {
  const onScreenShort = new OnScreenShort({
    taskInstructions: 'Insert Task Instructions text here',
    taskBenefits: 'Insert Task Benefits text here',
  });
  await onScreenShort.save();
  res.json({
    success: true,
    payload: onScreenShort,
  });
});

// Gets all the Onscreen Short Tasks from the Mongo DB
router.get('/onscreen/short', async (req, res) => {
  const allOnScreenShort = await OnScreenShort.find();
  res.json({
    success: true,
    payload: allOnScreenShort,
  });
});

// Adds a Onscreen Medium Task to the Mongo DB
router.get('/add/onscreen/medium', async (req, res) => {
  const onScreenMedium = new OnScreenMedium({
    taskInstructions: 'Insert Task Instructions text here',
    taskBenefits: 'Insert Task Benefits text here',
  });
  await onScreenMedium.save();
  res.json({
    success: true,
    payload: onScreenMedium,
  });
});

// Gets all the Onscreen Medium Tasks from the Mongo DB
router.get('/onscreen/medium', async (req, res) => {
  const allOnScreenMedium = await OnScreenMedium.find();
  res.json({
    success: true,
    payload: allOnScreenMedium,
  });
});

// Adds a Onscreen Long Task to the Mongo DB
router.get('/add/onscreen/long', async (req, res) => {
  const onScreenLong = new OnScreenLong({
    taskInstructions: 'Insert Task Instructions text here',
    taskBenefits: 'Insert Task Benefits text here',
  });
  await onScreenLong.save();
  res.json({
    success: true,
    payload: onScreenLong,
  });
});

// Gets all the Onscreen Long Tasks from the Mongo DB
router.get('/onscreen/long', async (req, res) => {
  const allOnScreenLong = await OnScreenLong.find();
  res.json({
    success: true,
    payload: allOnScreenLong,
  });
});

// Adds a Offscreen Short Task to the Mongo DB
router.get('/add/offscreen/short', async (req, res) => {
  const offScreenShort = new OffScreenShort({
    taskInstructions: 'Insert Task Instructions text here',
    taskBenefits: 'Insert Task Benefits text here',
  });
  await offScreenShort.save();
  res.json({
    success: true,
    payload: offScreenShort,
  });
});

// Gets all the Onscreen Short Tasks from the Mongo DB
router.get('/offscreen/short', async (req, res) => {
  const allOffScreenShort = await OffScreenShort.find();
  res.json({
    success: true,
    payload: allOffScreenShort,
  });
});

// Adds a Onscreen Medium Task to the Mongo DB
router.get('/add/offscreen/medium', async (req, res) => {
  const offScreenMedium = new OffScreenMedium({
    taskInstructions: 'Insert Task Instructions text here',
    taskBenefits: 'Insert Task Benefits text here',
  });
  await offScreenMedium.save();
  res.json({
    success: true,
    payload: offScreenMedium,
  });
});

// Gets all the Onscreen Medium Tasks from the Mongo DB
router.get('/offscreen/medium', async (req, res) => {
  const allOffScreenMedium = await OffScreenMedium.find();
  res.json({
    success: true,
    payload: allOffScreenMedium,
  });
});

// Adds a Onscreen Long Task to the Mongo DB
router.get('/add/offscreen/long', async (req, res) => {
  const offScreenLong = new OffScreenLong({
    taskInstructions: 'Insert Task Instructions text here',
    taskBenefits: 'Insert Task Benefits text here',
  });
  await offScreenLong.save();
  res.json({
    success: true,
    payload: offScreenLong,
  });
});

// Gets all the Onscreen Long Tasks from the Mongo DB
router.get('/offscreen/long', async (req, res) => {
  const allOffScreenLong = await OffScreenLong.find();
  res.json({
    success: true,
    payload: allOffScreenLong,
  });
});

export default router;
