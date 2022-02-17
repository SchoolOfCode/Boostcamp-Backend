import db from '../../connection.js';

import mediumTasks from '../../../libs/medium-tasks-data';

async function populateMediumTable() {
  for (let i = 0; i < mediumTasks.length; i++) {
    const taskName = mediumTasks[i].taskName;
    const taskDuration = mediumTasks[i].taskDuration;
    const taskInstructions = mediumTasks[i].taskInstructions;
    const taskBenefits = mediumTasks[i].task_benefits;
    const taskImage = mediumTasks[i].taskImage;
    const taskVideo = mediumTasks[i].taskVideo;

    const response = await db.query(
      `INSERT INTO medium (task_name, task_duration, task_instructions, task_benefits, task_image, task_video) VALUES ($1, $2, $3, $4, $5, $6);`,
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

populateMediumTable();

console.log(response);

db.end();
