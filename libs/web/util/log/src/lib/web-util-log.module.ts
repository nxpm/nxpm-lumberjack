import { NgModule } from '@angular/core'
import { LumberjackLevel, LumberjackModule } from '@ngworker/lumberjack'
import { LumberjackConsoleDriverModule } from '@ngworker/lumberjack/console-driver'
import { LumberjackConfigLevels } from '@ngworker/lumberjack/lib/logs/lumberjack-config-levels'
import { ApolloSdkDriverModule } from './apollo-sdk-driver/apollo-sdk-driver.module'
import { WebUtilLogService } from './web-util-log.service'

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
  providers: [WebUtilLogService],
})
export class WebUtilLogModule {}
