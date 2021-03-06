import { UseGuards } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { GqlAuthAdminGuard } from '@nxpm-lumberjack/api/auth/data-access'
import { CorePaging, CorePagingInput } from '@nxpm-lumberjack/api/core/data-access'
import { ApiLogDataAccessService, Log } from '@nxpm-lumberjack/api/log/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiLogAdminFeatureResolver {
  constructor(private readonly service: ApiLogDataAccessService) {}

  @Query(() => [Log], { nullable: true })
  adminLogs(@Args('input') input: CorePagingInput) {
    return this.service.adminLogs(input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountLogs(@Args('input') input: CorePagingInput) {
    return this.service.adminCountLogs(input)
  }

  @Query(() => Log, { nullable: true })
  adminLog(@Args('logId') logId: string) {
    return this.service.adminLog(logId)
  }
}
