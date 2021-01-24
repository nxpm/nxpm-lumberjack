import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@nxpm-lumberjack/api/core/data-access'
import { ApiLogDataAccessService } from './api-log-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiLogDataAccessService],
  exports: [ApiLogDataAccessService],
})
export class ApiLogDataAccessModule {}
