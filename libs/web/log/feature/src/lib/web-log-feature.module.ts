import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', loadChildren: () => import('./log-list/log-list.module').then((m) => m.LogListModule) },
      // { path: ':logId', loadChildren: () => {} },
    ]),
  ],
})
export class WebLogFeatureModule {}
