import db from '../../connection.js';

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS short (id SERIAL PRIMARY KEY, task_name TEXT, task_duration TEXT, task_instructions TEXT, task_benefits TEXT, task_image TEXT, task_video TEXT); CREATE TABLE IF NOT EXISTS medium (id SERIAL PRIMARY KEY, task_name TEXT, task_duration TEXT, task_instructions TEXT, task_benefits TEXT, task_image TEXT, task_video TEXT); CREATE TABLE IF NOT EXISTS long (id SERIAL PRIMARY KEY, task_name TEXT, task_duration TEXT, task_instructions TEXT, task_benefits TEXT, task_image TEXT, task_video TEXT);`
);

console.log(response);

db.end();
