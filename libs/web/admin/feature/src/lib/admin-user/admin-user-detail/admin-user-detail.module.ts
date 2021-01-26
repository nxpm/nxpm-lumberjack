import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminUserFormModule } from '@nxpm-lumberjack/web/admin/ui'
import { WebUiPageHeaderModule } from '@nxpm-lumberjack/web/ui/page-header'

import { AdminUserDetailComponent } from './admin-user-detail.component'

const routes: Routes = [{ path: '', component: AdminUserDetailComponent }]

@NgModule({
  declarations: [AdminUserDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AdminUserFormModule, WebUiPageHeaderModule],
})
export class AdminUserDetailModule {}
