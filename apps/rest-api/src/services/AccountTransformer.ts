import { Injectable } from '@nestjs/common';
import { Account } from '@cms-headless/domain';
import { AccountOutput } from '../models/AccountOutput';

@Injectable()
export class AccountTransformer {
  entityToModel({ email, firstName, lastName }: Account): AccountOutput {
    return Object.assign(new AccountOutput(), { email, firstName, lastName });
  }
}
