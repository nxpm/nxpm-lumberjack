import { Module } from '@nestjs/common'
import { ApiAuthFeatureModule } from '@nxpm-lumberjack/api/auth/feature'
import { ApiCoreFeatureModule } from '@nxpm-lumberjack/api/core/feature'
import { ApiLogFeatureModule } from '@nxpm-lumberjack/api/log/feature'

@Module({
  imports: [ApiAuthFeatureModule, ApiCoreFeatureModule, ApiLogFeatureModule],
})
export class AppModule {}
