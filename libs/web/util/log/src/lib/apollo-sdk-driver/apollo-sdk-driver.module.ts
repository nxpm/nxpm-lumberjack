import { ModuleWithProviders, NgModule } from '@angular/core'
import { LumberjackLogDriverConfig, lumberjackLogDriverToken } from '@ngworker/lumberjack'

import { webUtilLogToken } from '../web-util-log.token'
import { ApolloSdkDriver } from './apollo-sdk-driver'

@NgModule({
  providers: [
    {
      provide: lumberjackLogDriverToken,
      useClass: ApolloSdkDriver,
      multi: true,
    },
  ],
})
export class ApolloSdkDriverModule {
  static forRoot(config?: LumberjackLogDriverConfig): ModuleWithProviders<ApolloSdkDriverModule> {
    return {
      ngModule: ApolloSdkDriverModule,
      providers: (config && [{ provide: webUtilLogToken, useValue: config }]) || [],
    }
  }
}
