import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AuthenticationService } from './services/AuthenticationService';
import { Account } from './entities/Account';
import { AccessToken } from './entities/AccessToken';
import { Organization } from './entities/Organization';
import { Content } from './entities/Content';
import { ContentType } from './entities/ContentType';
import { Component } from './entities/Component';
import { ComponentValue } from './entities/ComponentValue';

const entities = [
  Account,
  AccessToken,
  Organization,
  Content,
  ContentType,
  Component,
  ComponentValue,
];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      entities,
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: false,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  providers: [AuthenticationService],
  exports: [TypeOrmModule],
})
export class DomainModule {}
