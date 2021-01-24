import { BeforeApplicationShutdown, Injectable, OnModuleInit } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@nxpm-lumberjack/api/core/data-access'
import { Prisma } from '@prisma/client'
import { LogLevel } from './model/log-level.enum'

@Injectable()
export class ApiLogDataAccessService implements BeforeApplicationShutdown, OnModuleInit {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminLogs(input: CorePagingInput) {
    return this.data.log.findMany({
      skip: input.skip,
      take: input.limit,
      orderBy: { createdAt: 'desc' },
    })
  }

  async adminCountLogs(input: CorePagingInput): Promise<CorePaging> {
    const total = await this.data.log.count()

    return {
      total,
      ...input,
    }
  }

  adminLog(logId: string) {
    return this.data.log.findUnique({ where: { id: logId } })
  }

  getInfo() {
    return {
      uptime: process.uptime(),
      cwd: process.cwd(),
    }
  }

  async beforeApplicationShutdown() {
    await this.logDebug(`ApiLogDataAccessService Destroyed`, this.getInfo())
  }

  async onModuleInit() {
    await this.logDebug(`ApiLogDataAccessService Initialized`, this.getInfo())
  }

  async logDebug(message: string, payload) {
    return this.logItem({ level: LogLevel.Debug as any, message, payload })
  }

  logItem(data: Prisma.LogCreateInput) {
    return this.data.log.create({ data })
  }
}
