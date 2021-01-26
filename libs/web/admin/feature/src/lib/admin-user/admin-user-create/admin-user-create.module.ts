import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminUserFormModule } from '@nxpm-lumberjack/web/admin/ui'
import { WebUiPageHeaderModule } from '@nxpm-lumberjack/web/ui/page-header'

import { AdminUserCreateComponent } from './admin-user-create.component'

const routes: Routes = [{ path: '', component: AdminUserCreateComponent }]

@NgModule({
  declarations: [AdminUserCreateComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AdminUserFormModule, WebUiPageHeaderModule],
})
export class AdminUserCreateModule {}
