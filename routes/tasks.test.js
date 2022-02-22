import router from './tasks.js';
import request from 'supertest';

test('GET /tasks/onscreen/short', () => {
  request(router)
    //    1. Sends a `GET /users` request to our app using Supertest
    .get('/tasks/onscreen/short')
    //    2. Checks if the response's HTTP status code is 200
    .expect(200)
    //    3. Checks if the response's body is an object with the structure: `{ success: true, payload: array }`
    .then((res) => {
      res.body = {
        success: true,
        payload: expect.any(Object),
      };
      //    4. Checks if every item in the `payload` array is an object with the structure of routes/tasks.js
      res.body.payload = {
        taskInstructions: expect.any(String),
        taskBenefits: expect.any(String),
      };
    });
});
