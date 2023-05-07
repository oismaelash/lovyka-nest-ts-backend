import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('ReservationController', () => {
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

  describe('should be infos a check in and check out and infos hotel', () => {
    it('should be post a get infos check-in hotel', async () => {
      const body = {
        header: {
          supplierId: 'GOHOTEL',
          distributorId: 'RCATURISMO',
          version: 'v4.0',
          token: '1683151182406',
        },
        stayRange: {
          checkin: '2023-05-03',
          checkout: '2023-05-06',
        },
        roomCriteria: {
          roomCount: 1,
          adultCount: 1,
          childCount: 0,
          childAges: [],
        },
        hotelId: 'GOH202',
        iata: 'eta',
        bookingChannel: '1',
        promoteCode: '',
        isAfterPromotion: false,
      };

      return await request(app.getHttpServer())
        .post(`/reservation`)
        .send(body)
        .expect(200);
    }, 10000);
  });
});
