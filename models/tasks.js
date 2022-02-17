import db from '../db/connection.js';

// functions to retrieve all tasks
export async function getShortTasks() {
  const result = await db.query(`SELECT * FROM short;`);
  return result.rows;
}
export async function getMediumTasks() {
  const result = await db.query(`SELECT * FROM medium;`);
  return result.rows;
}
export async function getLongTasks() {
  const result = await db.query(`SELECT * FROM long;`);
  return result.rows;
}

// functions to retrieve all onscreen tasks
export async function getOnscreenShortTasks() {
  const result = await db.query(
    `SELECT * FROM short WHERE task_type='onscreen';`
  );
  return result.rows;
}
export async function getOnscreenMediumTasks() {
  const result = await db.query(
    `SELECT * FROM medium WHERE task_type='onscreen';`
  );
  return result.rows;
}
export async function getOnscreenLongTasks() {
  const result = await db.query(
    `SELECT * FROM long WHERE task_type='onscreen';`
  );
  return result.rows;
}

// functions to retrieve all offscreen tasks
export async function getOffscreenShortTasks() {
  const result = await db.query(
    `SELECT * FROM short WHERE task_type='offscreen';`
  );
  return result.rows;
}
export async function getOffscreenMediumTasks() {
  const result = await db.query(
    `SELECT * FROM medium WHERE task_type='offscreen';`
  );
  return result.rows;
}
export async function getOffscreenLongTasks() {
  const result = await db.query(
    `SELECT * FROM long WHERE task_type='offscreen';`
  );
  return result.rows;
}

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  taskDuration: { type: String, required: true },
  taskInstructions: { type: String, required: true },
  taskBenefits: { type: String, required: true },
  taskImage: { type: String, required: false },
  taskVideo: { type: String, required: false },
  taskType: { type: String, required: true },
});

export const OnscreenShortTask = mongoose.model(
  'OnscreenShortTask',
  taskSchema
);
