import { Controller, Get, Req } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { LoggedRequest } from '../LoggedRequest';
import { AuthenticationService } from '@cms-headless/domain';
import { AccountTransformer } from '../services/AccountTransformer';
import { OrganizationTransformer} from '../services/OrganizationTransformer';
import { OrganizationOutput } from '../models/OrganizationOutput';
import { AccountOutput } from '../models/AccountOutput';


@Controller()
export class AccountController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly accountTransformer: AccountTransformer,
    private readonly organizationTransformer: OrganizationTransformer,
  ) {}

  @Get('/my/account')
  @ApiCreatedResponse({ type: AccountOutput })
  async me(@Req() request: LoggedRequest): Promise<null | AccountOutput> {
    if (request.account) {
      return this.accountTransformer.entityToModel(request.account);
    }

    return null;
  }

  @Get('/my/organizations')
  @ApiCreatedResponse({ type: OrganizationOutput, isArray: true })
  async getOrganisations(
    @Req() request: LoggedRequest,
  ): Promise<null | OrganizationOutput[]> {
    return (await request.account.ownerOf).map(
      this.organizationTransformer.entityToModel,
    );
  }
}
