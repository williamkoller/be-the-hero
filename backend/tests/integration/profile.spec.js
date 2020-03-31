const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/connection');

describe('Profile Access', () => {
  beforeEach(async () => {
    await conn.migrate.rollback();
    await conn.migrate.latest();
  });

  afterAll(async () => {
    await conn.destroy();
  });

  it('should to access profile', function (done) {
     request(app)
      .get('/profile')
      .set('Authorization', '94e00674')
      .expect('Content-Type', /json/)
      .expect(200, function () {
        done();
      });
  });
});