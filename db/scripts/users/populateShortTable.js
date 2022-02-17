import db from "../../connection.js";

import shortTasks from "../../../libs/short-tasks-data.js";

async function populateShortTable() {
   for (let i = 0; i < shortTasks.length; i++) {
      const taskName = shortTasks[i].taskName;
      const taskDuration = shortTasks[i].taskDuration;
      const taskInstructions = shortTasks[i].taskInstructions;
      const taskBenefits = shortTasks[i].taskBenefits;
      const taskImage = shortTasks[i].taskImage;
      const taskVideo = shortTasks[i].taskVideo;
      const taskType = shortTasks[i].taskType;

      const response = await db.query(
         `INSERT INTO short (task_name, task_duration, task_instructions, task_benefits, task_image, task_video, task_type) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
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

populateShortTable();

db.end();
