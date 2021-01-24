import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiSidebarPageModule } from '@nxpm-lumberjack/web/ui/sidebar-page'
import { WebAdminFeatureComponent } from './web-admin-feature.component'

@NgModule({
  declarations: [WebAdminFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebAdminFeatureComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
          {
            path: 'dashboard',
            loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
          },
        ],
      },
    ]),
    WebUiSidebarPageModule,
  ],
})
export class WebAdminFeatureModule {}
