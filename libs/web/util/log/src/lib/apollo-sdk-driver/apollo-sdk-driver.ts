import { Inject, Injectable } from '@angular/core'

import { LumberjackLogDriver, LumberjackLogDriverConfig, LumberjackLogDriverLog } from '@ngworker/lumberjack'
import { ApolloAngularSDK, LogLevel } from '@nxpm-lumberjack/web/core/data-access'

import { webUtilLogToken } from '../web-util-log.token'

@Injectable()
export class ApolloSdkDriver implements LumberjackLogDriver {
  constructor(
    @Inject(webUtilLogToken) public config: LumberjackLogDriverConfig,
    private readonly sdk: ApolloAngularSDK,
  ) {}

  private createLog(level: LogLevel, message: string, payload, createdAt: Date, scope: string) {
    return this.sdk.createLog({ input: { message, level, createdAt, payload, scope } }).subscribe()
  }

  logCritical({ log }: LumberjackLogDriverLog): void {
    this.createLog(LogLevel.Critical, log.message, log.payload, new Date(log.createdAt), log.scope)
  }

  logDebug({ log }: LumberjackLogDriverLog): void {
    this.createLog(LogLevel.Debug, log.message, log.payload, new Date(log.createdAt), log.scope)
  }

  logError({ log }: LumberjackLogDriverLog): void {
    this.createLog(LogLevel.Error, log.message, log.payload, new Date(log.createdAt), log.scope)
  }

  logInfo({ log }: LumberjackLogDriverLog): void {
    this.createLog(LogLevel.Info, log.message, log.payload, new Date(log.createdAt), log.scope)
  }

  logTrace({ log }: LumberjackLogDriverLog): void {
    this.createLog(LogLevel.Trace, log.message, log.payload, new Date(log.createdAt), log.scope)
  }

  logWarning({ log }: LumberjackLogDriverLog): void {
    this.createLog(LogLevel.Warning, log.message, log.payload, new Date(log.createdAt), log.scope)
  }
}
