import db from "../../connection.js";

import longTasks from "../../../libs/long-tasks-data.js";

async function populateLongTable() {
   for (let i = 0; i < longTasks.length; i++) {
      const taskName = longTasks[i].taskName;
      const taskDuration = longTasks[i].taskDuration;
      const taskInstructions = longTasks[i].taskInstructions;
      const taskBenefits = longTasks[i].taskBenefits;
      const taskImage = longTasks[i].taskImage;
      const taskVideo = longTasks[i].taskVideo;
      const taskType = longTasks[i].taskType;

      const response = await db.query(
         `INSERT INTO long (task_name, task_duration, task_instructions, task_benefits, task_image, task_video, task_type) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
         [
            taskName,
            taskDuration,
            taskInstructions,
            taskBenefits,
            taskImage,
            taskVideo,
            taskType,
         ]
      );
   }
}

populateLongTable();
