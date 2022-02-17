import db from '../../connection.js';

const response = await db.query(
  `INSERT INTO long (task_name, task_duration, task_instructions, task_benefits, task_image, task_video) VALUES (Beach time, No time limit, Hop in the car and take a trip to the nearest beach and get some vitamin D, Sun sand and sea, https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2021/05/rr9drn-e1621419614958.jpg;`
);

console.log(response);

db.end();
