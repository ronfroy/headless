import { Injectable } from '@nestjs/common';
import { Organization } from '@cms-headless/domain';
import { OrganizationOutput } from '../models/OrganizationOutput';

@Injectable()
export class OrganizationTransformer {
  entityToModel({ id, name }: Organization): OrganizationOutput {
    return Object.assign(new OrganizationOutput(), { id, name });
  }
}
