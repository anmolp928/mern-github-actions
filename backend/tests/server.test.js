const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should return success message', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);

    expect(response.body.message).toBe(
      'Backend running successfully'
    );
  });
});