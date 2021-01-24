import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@nxpm-lumberjack/web/core/data-access'
import { WebUtilLogService } from '@nxpm-lumberjack/web/util/log'

@Component({
  template: `
    <ui-page headerTitle="Dashboard">
      <div class="card">
        <div class="card-header">Dashboard</div>
        <div class="card-body">
          <pre>{{ me$ | async | json }}</pre>
          <div class="flex space-x-2">
            <button class="px-3 py-1 rounded bg-gray-200 text-gray-700" (click)="testDebug()">Debug</button>
            <button class="px-3 py-1 rounded bg-red-200 text-red-700" (click)="testError()">Error</button>
            <button class="px-3 py-1 rounded bg-blue-200 text-blue-700" (click)="testInfo()">Info</button>
            <button class="px-3 py-1 rounded bg-yellow-200 text-yellow-700" (click)="testWarning()">Warning</button>
          </div>
        </div>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
    </ui-page>
  `,
})
export class WebDashboardFeatureComponent {
  uptime$ = this.data.uptimeWatch()
  me$ = this.data.me()
  constructor(private readonly data: WebCoreDataAccessService, private readonly log: WebUtilLogService) {}

  testDebug() {
    this.log.debug('This is an Debug Log', { some: 'extra', data: 'object' })
  }

  testError() {
    this.log.error('This is an Error Log', { some: 'extra', data: 'object' })
  }

  testInfo() {
    this.log.info('This is an Info Log', { some: 'extra', data: 'object' })
  }

  testWarning() {
    this.log.warning('This is an Info Log', { some: 'extra', data: 'object' })
  }
}
