import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { Account } from '../entities/Account';
import { AuthenticationService } from './AuthenticationService';
import { DomainModule } from '../DomainModule';

describe('AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  let module: TestingModule;
  let app: INestApplication;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [DomainModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    authenticationService = module.get<AuthenticationService>(
      AuthenticationService,
    );
  });

  describe('getAccountByTokenAndEmail', () => {
    it('should return null when token does not exist', async () => {
      const account = await authenticationService.getAccountByToken(
        'falsy_id',
        'falsy_key',
      );

      expect(account).toBeNull();
    });

    it('should return Account when token and email are valid', async () => {
      const account = await authenticationService.getAccountByToken(
        'y23j754cBQ3vSuqdqUC8AKaw5hfUQ8',
        '87vuJYYcaUduBXXssTbnNMjfESRbXP',
      );
      expect(account).toBeInstanceOf(Account);
      expect(account.email).toBe('rudy@onfroy.net');
    });
  });

  afterEach(async () => {
    await app.close();
  });
});
