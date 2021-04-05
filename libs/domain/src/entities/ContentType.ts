import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Content } from './Content';
import { Component } from './Component';
import { Account } from './Account';

@Entity({ name: 'content_type' })
export class ContentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @OneToMany(() => Content, (content) => content.contentType)
  contents: Promise<Content[]>;

  @OneToMany(() => Component, (component) => component.contentType)
  components: Promise<Component[]>;
}
