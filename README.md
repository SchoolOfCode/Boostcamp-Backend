# Boostcamp API

## App URL:

https://socboostcampapi.herokuapp.com/

## Running Locally:

1. Clone the repository.
2. `npm i`.
3. add a .env file to your repository.
4. The DATABASE URI for the .env can be found in the team slack.

## Adding a task:

1. `Npm run dev` to start the server.
2. Go to `localhost:3000/tasks/`.
3. Fill out the form to add a task to a specific MongoDB Collection on the database - both the `Task Instructions` and `Task Benefits` fields MUST be filled or it will crash the server.
4. You can check that that the task has been added to the database by going to that collections corresponding URL route below.

## Routes:

The routes below are to fetch all the tasks from their respective collection.

- /tasks/onscreen/short
- /tasks/onscreen/medium
- /tasks/onscreen/long
- /tasks/offscreen/short
- /tasks/offscreen/medium
- /tasks/offscreen/long
