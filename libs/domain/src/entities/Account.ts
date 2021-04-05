import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AccessToken } from './AccessToken';
import { Organization } from './Organization';

@Entity({ name: 'account' })
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => AccessToken, (token) => token.account)
  accessTokens: Promise<AccessToken[]>;

  @OneToMany(() => Organization, (organization) => organization.owner)
  ownerOf: Promise<Organization[]>;
}
