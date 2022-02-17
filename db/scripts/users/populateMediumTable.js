import db from '../../connection.js';

const response = await db.query(
  `INSERT INTO medium (task_name, task_duration, task_instructions, task_benefits, task_image, task_video) VALUES (Cloud Finding, 30-60 Minutes, Go for a walk around and find an animal shaped cloud in the sky, Get some light exercise whilst stimulating your imagination, https://t3.ftcdn.net/jpg/02/62/14/64/360_F_262146433_ANTJ00aekHaclmILtXKO0AkwE1DZ9vu9.jpg);`
);

console.log(response);

db.end();
