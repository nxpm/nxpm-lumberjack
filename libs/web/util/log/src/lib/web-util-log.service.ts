import { Injectable } from '@angular/core'
import { LumberjackLevel, LumberjackLogPayload, LumberjackService } from '@ngworker/lumberjack'

export interface WebUtilLogPayload extends LumberjackLogPayload {
  [key: string]: unknown
}

@Injectable()
export class WebUtilLogService {
  private readonly scope = 'web'

  constructor(private readonly lumberjack: LumberjackService<WebUtilLogPayload>) {}

  debug(message: string, payload?: WebUtilLogPayload) {
    return this.lumberjack.log({
      scope: this.scope,
      level: LumberjackLevel.Debug,
      createdAt: Date.now(),
      message,
      payload,
    })
  }

  error(message: string, payload?: WebUtilLogPayload) {
    return this.lumberjack.log({
      scope: this.scope,
      level: LumberjackLevel.Error,
      createdAt: Date.now(),
      message,
      payload,
    })
  }

  info(message: string, payload?: WebUtilLogPayload) {
    return this.lumberjack.log({
      scope: this.scope,
      level: LumberjackLevel.Info,
      createdAt: Date.now(),
      message,
      payload,
    })
  }

  warn(message: string, payload?: WebUtilLogPayload) {
    return this.lumberjack.log({
      scope: this.scope,
      level: LumberjackLevel.Warning,
      createdAt: Date.now(),
      message,
      payload,
    })
  }
}
