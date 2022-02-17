import db from '../../connection.js';

import shortTasks from '../../../libs/short-tasks-data';

async function populateShortTable() {
  for (let i = 0; i < shortTasks.length; i++) {
    const taskName = shortTasks[i].taskName;
    const taskDuration = shortTasks[i].taskDuration;
    const taskInstructions = shortTasks[i].taskInstructions;
    const taskBenefits = shortTasks[i].task_benefits;
    const taskImage = shortTasks[i].taskImage;
    const taskVideo = shortTasks[i].taskVideo;

    const response = await db.query(
      `INSERT INTO short (task_name, task_duration, task_instructions, task_benefits, task_image, task_video) VALUES ($1, $2, $3, $4, $5, $6);`,
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

populateShortTable();

console.log(response);

db.end();
