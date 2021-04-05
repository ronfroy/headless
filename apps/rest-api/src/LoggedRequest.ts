import { Request } from 'express';
import { Account } from '@cms-headless/domain';

export interface LoggedRequest extends Request {
  account: Account;
}
