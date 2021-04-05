import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ContentType } from './ContentType';

@Entity({ name: 'content' })
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ContentType, (contentType) => contentType.contents, {
    eager: true,
  })
  contentType: ContentType;
}
