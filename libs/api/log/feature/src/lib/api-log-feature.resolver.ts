import { UseGuards } from '@nestjs/common'
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { CtxUser, GqlAuthGuard } from '@nxpm-lumberjack/api/auth/data-access'
import { getClientIp } from '@nxpm-lumberjack/api/core/util'
import { ApiLogDataAccessService, CreateLogInput, Log } from '@nxpm-lumberjack/api/log/data-access'
import { User } from '@nxpm-lumberjack/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiLogFeatureResolver {
  constructor(private readonly service: ApiLogDataAccessService) {}

  @Mutation(() => Log, { nullable: true })
  createLog(@CtxUser() user: User, @Context() context, @Args('input') input: CreateLogInput) {
    return this.service.createLog(user.id, input, getClientIp(context.req))
  }
}
