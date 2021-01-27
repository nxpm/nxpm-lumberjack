import { NgModule } from '@angular/core'
import { LumberjackLevel, LumberjackModule } from '@ngworker/lumberjack'
import { LumberjackConsoleDriverModule } from '@ngworker/lumberjack/console-driver'
import { LumberjackConfigLevels } from '@ngworker/lumberjack/lib/logs/lumberjack-config-levels'
import { ApolloSdkDriverModule } from './apollo-sdk-driver/apollo-sdk-driver.module'

const levels: LumberjackConfigLevels = [LumberjackLevel.Verbose]

@NgModule({
  imports: [
    LumberjackModule.forRoot({
      levels: [...levels],
    }),
    LumberjackConsoleDriverModule.forRoot({
      levels: [...levels],
    }),
    ApolloSdkDriverModule.forRoot(),
  ],
})
export class WebUtilLogModule {}
