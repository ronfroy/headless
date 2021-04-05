import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ComponentValue } from './ComponentValue';
import { ContentType } from './ContentType';

@Entity({ name: 'component' })
export class Component {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column({ name: 'config', type: 'json', nullable: true })
  config: string;

  @ManyToOne(() => ContentType, (contentType) => contentType.components, {
    eager: true,
  })
  contentType: ContentType;

  @OneToMany(() => ComponentValue, (componentValue) => componentValue.component)
  values: Promise<ComponentValue[]>;
}
