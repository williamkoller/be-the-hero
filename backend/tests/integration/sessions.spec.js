const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/connection');

describe('Sessions Access', () => {
  beforeEach(async () => {
    await conn.migrate.rollback();
    await conn.migrate.latest();
  });

  afterAll(async () => {
    await conn.destroy();
  });

  it('should to access sessions', async () => {
    const res = await request(app)
    .post('/sessions')
    .send({
      name: "ONG Test",
    });

    expect(res.body.id);

  });
});
