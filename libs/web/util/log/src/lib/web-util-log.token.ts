import { inject, InjectionToken } from '@angular/core'
import { LumberjackLogDriverConfig, lumberjackLogDriverConfigToken } from '@ngworker/lumberjack'

export const webUtilLogToken = new InjectionToken<LumberjackLogDriverConfig>('__CONSOLE_DRIVER_CONFIG__', {
  factory: () => inject(lumberjackLogDriverConfigToken),
})
