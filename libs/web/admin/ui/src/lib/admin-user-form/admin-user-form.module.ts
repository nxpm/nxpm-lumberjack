import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@nxpm-lumberjack/web/ui/form'
import { AdminUserFormComponent } from './admin-user-form.component'

@NgModule({
  declarations: [AdminUserFormComponent],
  exports: [AdminUserFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
})
export class AdminUserFormModule {}
