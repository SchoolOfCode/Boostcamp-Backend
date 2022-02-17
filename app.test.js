import request from 'supertest';

import app from './app.js';

describe('GET /tasks', function () {
  test('gives us back 404, with a message', async function () {
    const expectedBody = {
      message: "We couldn't find what you were looking for 😞",
    };
    const actual = await request(app).get('/tasks');
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(404);
  });
});
