import { LumberjackLogPayload } from '@ngworker/lumberjack'

import { User } from '@nxpm-lumberjack/web/core/data-access'

export interface AuthPayload extends LumberjackLogPayload {
  user: User
}
