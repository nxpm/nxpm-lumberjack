import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePagingInput } from '@nxpm-lumberjack/api/core/data-access'

@Injectable()
export class ApiLogDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminLogs(input: CorePagingInput) {
    return this.data.log.findMany({
      skip: input.skip,
      take: input.limit,
    })
  }

  adminLog(logId: string) {
    return this.data.log.findUnique({ where: { id: logId } })
  }
}
