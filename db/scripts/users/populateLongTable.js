import db from '../../connection.js';

const response = await db.query(
  `INSERT INTO long (task_name, task_duration, task_instructions, task_benefits, task_image, task_video) VALUES (Polish Glasses or Plates, 5-10 Minutes, Go to the kitchen find some polish and make those glasses and plate shiny, A clean kitchen means a clean mind, https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F32%2FMap_of_Polish_language.svg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPolish_language&tbnid=i-Jtag_7DePlkM&vet=12ahUKEwjZtPX42Yb2AhWCRUEAHWjGBrwQMygAegUIARDZAQ..i&docid=oIOLM2MbvrX3HM&w=2865&h=3118&q=polish&ved=2ahUKEwjZtPX42Yb2AhWCRUEAHWjGBrwQMygAegUIARDZAQ, https://www.youtube.com/watch?v=r37ylwYIkRU&ab_channel=LearnPolishwithPolishPod101.com);`
);

console.log(response);

db.end();
