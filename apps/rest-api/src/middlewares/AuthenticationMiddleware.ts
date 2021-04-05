import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { AuthenticationService } from '@cms-headless/domain';
import { LoggedRequest } from '../LoggedRequest';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private readonly authenticationService: AuthenticationService) {}

  async use(req: LoggedRequest, res: Response, next: NextFunction) {
    const tokenId = (req.query.id as string) || null;
    const tokenKey = (req.query.key as string) || null;

    req.account = await this.authenticationService.getAccountByToken(
      tokenId,
      tokenKey,
    );

    next();
  }
}
