import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/AppModule';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/my/account (GET)', () => {
    return request(app.getHttpServer()).get('/my/account').expect(401).expect({});
  });

  it('/my/account (GET)', () => {
    return request(app.getHttpServer())
      .get(
        '/my/account?id=y23j754cBQ3vSuqdqUC8AKaw5hfUQ8&key=87vuJYYcaUduBXXssTbnNMjfESRbXP',
      )
      .expect(200)
      .expect({
        email: 'rudy@onfroy.net',
        firstName: 'Rudy',
        lastName: 'Onfroy',
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
