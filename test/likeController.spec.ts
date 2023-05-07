import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('PingController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = module.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('Get ping status', () => {
    it('should be get status of derby API', async () => {
      const distributorId = 'RCATURISMO';
      return await request(app.getHttpServer())
        .get(`/ping?distributorId=${distributorId}`)
        .expect(200);
    }, 10000);
  });
});
