const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/connection');

describe('ONG Created', () => {
  beforeEach(async () => {
    await conn.migrate.rollback();
    await conn.migrate.latest();
  });

  afterAll(async() => {
    await conn.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
      name: "ONG Koller",
      email: "contact@gmail.com",
      whatsapp: "41998625101",
      city: "Curitiba",
      uf: "PR"
    });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);

  });
});
