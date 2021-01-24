import { registerEnumType } from '@nestjs/graphql'

enum LogLevel {
  Debug = 'Debug',
  Error = 'Error',
  Info = 'Info',
  Warning = 'Warning',
}

export { LogLevel }

registerEnumType(LogLevel, { name: 'LogLevel' })
