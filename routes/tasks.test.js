import tasksRouter from './tasks.js';
import request from 'supertest';
// import jest from 'jest';

let urls = [
  '/onscreen/short',
  '/onscreen/medium',
  '/onscreen/long',
  '/offscreen/short',
  '/offscreen/medium',
  '/offscreen/long',
];

urls.forEach((url) => {
  test(url, async () => {
    await request(tasksRouter)
      .get(url)
      .expect(404)
      .then((res) => {
        res.body = {
          success: true,
          payload: expect.any(Object),
        };
        res.body.payload = {
          taskInstructions: expect.any(String),
          taskBenefits: expect.any(String),
        };
      });
  });
});
