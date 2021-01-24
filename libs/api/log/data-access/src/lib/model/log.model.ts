import { Field, ObjectType } from '@nestjs/graphql'
import GraphQLJSON from 'graphql-type-json'
import { LogLevel } from './log-level.enum'

@ObjectType()
export class Log {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field(() => LogLevel, { nullable: true })
  level?: LogLevel

  @Field({ nullable: true })
  message?: string

  @Field(() => GraphQLJSON, { nullable: true })
  payload?: any

  @Field({ nullable: true })
  ip?: string

  @Field({ nullable: true })
  user?: string
}
