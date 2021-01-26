import { Module } from '@nestjs/common'
import { ApiUserDataAccessModule } from '@nxpm-lumberjack/api/user/data-access'

import { ApiUserFeatureAdminResolver } from './api-user-feature-admin.resolver'
import { ApiUserFeatureResolver } from './api-user-feature.resolver'

@Module({
  imports: [ApiUserDataAccessModule],
  providers: [ApiUserFeatureResolver, ApiUserFeatureAdminResolver],
})
export class ApiUserFeatureModule {}
