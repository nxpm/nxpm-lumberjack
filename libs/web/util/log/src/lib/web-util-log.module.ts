import { NgModule } from '@angular/core'
import { LumberjackLevel, LumberjackModule } from '@ngworker/lumberjack'
import { LumberjackConsoleDriverModule } from '@ngworker/lumberjack/console-driver'
import { LumberjackConfigLevels } from '@ngworker/lumberjack/lib/logs/lumberjack-config-levels'
import { WebUtilLogService } from './web-util-log.service'

const levels: LumberjackConfigLevels = [
  LumberjackLevel.Debug,
  LumberjackLevel.Error,
  LumberjackLevel.Info,
  LumberjackLevel.Warning,
]

@NgModule({
  imports: [
    LumberjackModule.forRoot({
      levels: [...levels],
    }),
    LumberjackConsoleDriverModule.forRoot({
      levels: [...levels],
    }),
  ],
  providers: [WebUtilLogService],
})
export class WebUtilLogModule {}
