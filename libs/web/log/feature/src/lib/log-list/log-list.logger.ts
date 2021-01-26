import { Injectable } from '@angular/core'

import { ScopedLumberjackLogger } from '@ngworker/lumberjack'
import { LogPayload } from './log-payload'

@Injectable({ providedIn: 'root' })
export class LogListLogger extends ScopedLumberjackLogger<LogPayload> {
  scope = 'LogList'

  criticalLog = this.createCriticalLogger('This is a Critical Log')
    .withPayload({ some: 'extra', data: 'object' })
    .build()

  debugLog = this.createDebugLogger('This is a Debug Log').withPayload({ some: 'extra', data: 'object' }).build()

  errorLog = this.createErrorLogger('This is a Error Log').withPayload({ some: 'extra', data: 'object' }).build()

  infoLog = this.createInfoLogger('This is an Info Log').withPayload({ some: 'extra', data: 'object' }).build()

  warningLog = this.createWarningLogger('This is a Warning Log').withPayload({ some: 'extra', data: 'object' }).build()

  traceLog = this.createTraceLogger('This is a Trace Log').withPayload({ some: 'extra', data: 'object' }).build()

  errorFetchingLogs = this.createErrorLogger('Error fetching Logs').build()
}
