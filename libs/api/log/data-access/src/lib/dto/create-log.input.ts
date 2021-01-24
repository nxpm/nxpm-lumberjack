import { Field, InputType } from '@nestjs/graphql'
import GraphQLJSON from 'graphql-type-json'
import { LogLevel } from '../model/log-level.enum'

@InputType()
export class CreateLogInput {
  @Field({ nullable: true })
  createdAt?: Date

  @Field(() => LogLevel)
  level: LogLevel

  @Field()
  message: string

  @Field({ nullable: true })
  scope?: string

  @Field(() => GraphQLJSON, { nullable: true })
  payload?: any
}
