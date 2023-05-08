import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ServiceRequestDTO } from '../src/core/dtos/service.request.dto';

describe('ServiceController', () => {
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

  describe('operations of a service', () => {
    it('should be create a service', async () => {

      const payload: ServiceRequestDTO = {
        description: 'mock',
        name: 'mock',
        price: 99
      }

      return await request(app.getHttpServer())
        .post(`/service`)
        .send(payload)
        .expect(200);
    }, 10000);

    it('should be get all services without comments', async () => {
      return await request(app.getHttpServer())
        .get(`/service/all`)
        .field('comments', [])
        .expect(200);
    }, 10000);

    it('should be get one service with all comments', async () => {
      return await request(app.getHttpServer())
        .get(`/service/one`)
        .expect(200);
    }, 10000);

    it('should be update a service', async () => {

      const payload: ServiceRequestDTO = {
        description: 'mock-update',
        name: 'mock',
        price: 99
      }

      const serviceId = 'clhe8sd0i0000us78lz4jhdor'

      return await request(app.getHttpServer())
        .put(`/service?id=${serviceId}`)
        .send(payload)
        .expect(200);
    }, 10000);

    it('should be delete a service', async () => {
      const serviceId = 'clhe8sd0i0000us78lz4jhdor'

      return await request(app.getHttpServer())
        .delete(`/service?id=${serviceId}`)
        .expect(200);
    }, 10000);
  });
});
