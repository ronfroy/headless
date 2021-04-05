import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Component } from './Component';

@Entity({ name: 'component_value' })
export class ComponentValue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'value', type: 'json', nullable: true })
  value: string;

  @ManyToOne(() => Component, (component) => component.values, {
    eager: true,
  })
  component: Component;
}
