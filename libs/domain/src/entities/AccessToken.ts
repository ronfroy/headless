import { Entity, PrimaryColumn, ManyToOne, Column } from 'typeorm';
import { Account } from './Account';

@Entity({ name: 'access_token' })
export class AccessToken {
  @PrimaryColumn()
  id: string;

  @Column()
  key: string;

  @ManyToOne(() => Account, (account) => account.accessTokens, {
    eager: true,
  })
  account: Account;
}
