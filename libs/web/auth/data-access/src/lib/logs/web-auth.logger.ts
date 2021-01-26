import { Injectable } from '@angular/core'

import { ScopedLumberjackLogger } from '@ngworker/lumberjack'

import { AuthPayload } from './user-payload'

@Injectable({ providedIn: 'root' })
export class WebAuthLogger extends ScopedLumberjackLogger<AuthPayload> {
  scope: string = 'Auth'

  userRegistered = this.createInfoLogger('User registered').build()

  userLoggedOut = this.createInfoLogger('User logging out').withPayload(undefined).build()

  userLoggedIn = this.createInfoLogger('User logged in').build()
}
