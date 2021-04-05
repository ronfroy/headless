import { ApiProperty } from '@nestjs/swagger';

export class AccountOutput {
  @ApiProperty({ type: 'string'})
  email: string;

  @ApiProperty({ type: 'string'})
  firstName: string;

  @ApiProperty({ type: 'string'})
  lastName: string;
}
