import { ApiProperty } from '@nestjs/swagger';

export class OrganizationOutput {
  @ApiProperty({ type: 'number'})
  id: number;

  @ApiProperty({ type: 'string'})
  name: string;
}
