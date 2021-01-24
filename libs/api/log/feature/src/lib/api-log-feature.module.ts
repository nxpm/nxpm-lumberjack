import { Module } from '@nestjs/common'
import { ApiLogDataAccessModule } from '@nxpm-lumberjack/api/log/data-access'
import { ApiLogAdminFeatureResolver } from './api-log-admin-feature.resolver'
import { ApiLogFeatureResolver } from './api-log-feature.resolver'

@Module({
  imports: [ApiLogDataAccessModule],
  providers: [ApiLogAdminFeatureResolver, ApiLogFeatureResolver],
})
export class ApiLogFeatureModule {}
