import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../entities/Account';
import { AccessToken } from '../entities/AccessToken';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(AccessToken)
    private tokenRepository: Repository<AccessToken>,
  ) {}

  async getAccountByToken(id: string, key: string): Promise<null | Account> {
    const [accessToken] = await this.tokenRepository.find({ id, key });

    if (accessToken) {
      return accessToken.account;
    }

    return null;
  }
}

