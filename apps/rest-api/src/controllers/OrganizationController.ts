import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiParam, ApiCreatedResponse } from '@nestjs/swagger';
import { Repository } from 'typeorm';
import { Organization } from '@cms-headless/domain';
import { OrganizationTransformer } from '../services/OrganizationTransformer';
import { OrganizationOutput } from '../models/OrganizationOutput';


@Controller()
export class OrganizationController {
  constructor(
    @InjectRepository(Organization)
    private organisationRepository: Repository<Organization>,
    private readonly organizationTransformer: OrganizationTransformer,
  ) {}

  @Get('/organization/:id')
  @ApiParam({ name: 'id', type: 'number', example: 1, required: true})
  @ApiCreatedResponse({ type: OrganizationOutput })
  async get(
    @Param('id', new ParseIntPipe()) id,
  ): Promise<null | OrganizationOutput> {
    const organization = await this.organisationRepository.findOne(id);

    return this.organizationTransformer.entityToModel(organization);
  }

  @Get('/organizations')
  @ApiCreatedResponse({ type: OrganizationOutput, isArray: true })
  async getAll(): Promise<null | OrganizationOutput[]> {
    const organizations = await this.organisationRepository.find();

    return organizations.map(this.organizationTransformer.entityToModel);
  }
}
