import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forChild([
      // { path: '', loadChildren: () => {} },
      // { path: ':logId', loadChildren: () => {} },
    ]),
  ],
})
export class WebLogFeatureModule {}
