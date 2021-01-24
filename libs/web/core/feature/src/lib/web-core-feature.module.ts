import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { SvgIconsModule } from '@ngneat/svg-icon'
import { WebUtilLogModule } from '@nxpm-lumberjack/web/util/log'

import { WebCoreFeatureGraphQLModule } from './web-core-feature-graphql.module'

@NgModule({
  imports: [HttpClientModule, WebCoreFeatureGraphQLModule, WebUtilLogModule, SvgIconsModule.forRoot()],
})
export class WebCoreFeatureModule {}
