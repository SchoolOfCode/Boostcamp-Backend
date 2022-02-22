# Boostcamp API

## App URL:

https://socboostcampapi.herokuapp.com/

## Running Locally:

1. Clone the repository.
2. `npm i`.
3. add a .env file to your repository.
4. The DATABASE URI for the .env can be found in the team slack.

## Adding a task:

1. Go into `routes/tasks.js` and change the `taskInstructions` and `taskBenefits` for the specific task type and duration that you desire, and make sure you save the changes.
2. `Npm run dev` to start the server.
3. Open a browser and go to the specific `add` URL of the task you have changed - e.g for an onscreen short task you will go to the url `localhost:3000/tasks/add/onscreen/short`.
4. The above URL will add the task to the database - you can then check its been added by going to the corresponding handler `localhost:3000/tasks/onscreen/short`.

## Routes:

The routes below are to fetch all tasks from their respective collections.

- /tasks/onscreen/short
- /tasks/onscreen/medium
- /tasks/onscreen/long
- /tasks/offscreen/short
- /tasks/offscreen/medium
- /tasks/offscreen/long

The Routes below are required when adding tasks to the database.

- /tasks/add/onscreen/short
- /tasks/add/onscreen/medium
- /tasks/add/onscreen/long
- /tasks/add/offscreen/short
- /tasks/add/offscreen/medium
- /tasks/add/offscreen/long
