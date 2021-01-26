import { Logger, Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ApiAuthFeatureModule } from '@nxpm-lumberjack/api/auth/feature'
import { ApiCoreFeatureModule } from '@nxpm-lumberjack/api/core/feature'
import { ApiLogFeatureModule } from '@nxpm-lumberjack/api/log/feature'
import { ApiUserFeatureModule } from '@nxpm-lumberjack/api/user/feature'
import { ensureDirSync, existsSync, writeFileSync } from 'fs-extra'
import { join } from 'path'

const rootPath = join(__dirname, '..', 'web')

@Module({
  imports: [
    ApiAuthFeatureModule,
    ApiCoreFeatureModule,
    ApiLogFeatureModule,
    ApiUserFeatureModule,
    ServeStaticModule.forRoot({
      rootPath,
      exclude: ['/api/*', '/graphql'],
    }),
  ],
})
export class AppModule {
  constructor() {
    if (!existsSync(rootPath)) {
      ensureDirSync(rootPath)
      writeFileSync(join(rootPath, 'index.html'), `<pre>OK</pre>`)
      Logger.verbose(`Created static root path ${rootPath}`)
    }
  }
}
