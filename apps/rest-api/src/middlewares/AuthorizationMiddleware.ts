import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { LoggedRequest } from '../LoggedRequest';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  async use(req: LoggedRequest, res: Response, next: NextFunction) {
    if (!req.account) {
      res.status(401);
      await res.end();
    }

    next();
  }
}
