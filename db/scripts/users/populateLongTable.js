import db from '../../connection.js';

import longTasks from '../../../libs/long-tasks-data';

async function populateLongTable() {
  for (let i = 0; i < longTasks.length; i++) {
    const taskName = longTasks[i].taskName;
    const taskDuration = longTasks[i].taskDuration;
    const taskInstructions = longTasks[i].taskInstructions;
    const taskBenefits = longTasks[i].task_benefits;
    const taskImage = longTasks[i].taskImage;
    const taskVideo = longTasks[i].taskVideo;

    const response = await db.query(
      `INSERT INTO long (task_name, task_duration, task_instructions, task_benefits, task_image, task_video) VALUES ($1, $2, $3, $4, $5, $6);`,
      [
        taskName,
        taskDuration,
        taskInstructions,
        taskBenefits,
        taskImage,
        taskVideo,
      ]
    );
  }
}

populateLongTable();

console.log(response);

db.end();
