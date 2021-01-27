import { LumberjackLogPayload } from '@ngworker/lumberjack'

export interface LogPayload extends LumberjackLogPayload {
  some: string
  data: string
}
