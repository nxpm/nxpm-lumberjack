import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { WebCoreFeatureGraphQLModule } from './web-core-feature-graphql.module'

@NgModule({
  imports: [HttpClientModule, WebCoreFeatureGraphQLModule],
})
export class WebCoreFeatureModule {}
