import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DomainModule, AuthenticationService } from '@cms-headless/domain';
import { AuthenticationMiddleware } from './middlewares/AuthenticationMiddleware';
import { AuthorizationMiddleware } from './middlewares/AuthorizationMiddleware';
import { AccountController } from './controllers/AccountController';
import { OrganizationController } from './controllers/OrganizationController';
import { OrganizationTransformer } from './services/OrganizationTransformer';
import { AccountTransformer } from './services/AccountTransformer';

@Module({
  imports: [DomainModule],
  controllers: [AccountController, OrganizationController],
  providers: [
    AuthenticationService,
    OrganizationTransformer,
    AccountTransformer,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes('*')
      .apply(AuthorizationMiddleware)
      .forRoutes('/my');
  }
}
