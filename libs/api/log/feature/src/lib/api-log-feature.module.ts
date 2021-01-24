import { Module } from '@nestjs/common'
import { ApiLogDataAccessModule } from '@nxpm-lumberjack/api/log/data-access'
import { ApiLogFeatureResolver } from './api-log-feature.resolver'

@Module({
  imports: [ApiLogDataAccessModule],
  providers: [ApiLogFeatureResolver],
})
export class ApiLogFeatureModule {}
