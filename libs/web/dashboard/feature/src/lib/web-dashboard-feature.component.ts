import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@nxpm-lumberjack/web/core/data-access'

@Component({
  template: `
    <ui-page headerTitle="Dashboard">
      <div class="card">
        <div class="card-header">Dashboard</div>
        <div class="card-body">
          <pre>{{ me$ | async | json }}</pre>
        </div>
      </div>
    </ui-page>
  `,
})
export class WebDashboardFeatureComponent {
  me$ = this.data.me()
  constructor(private readonly data: WebCoreDataAccessService) {}
}
