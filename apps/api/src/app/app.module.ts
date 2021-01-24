import { ApiAuthFeatureModule } from '@nxpm-lumberjack/api/auth/feature'
import { ApiCoreFeatureModule } from '@nxpm-lumberjack/api/core/feature'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiAuthFeatureModule, ApiCoreFeatureModule],
})
export class AppModule {}
