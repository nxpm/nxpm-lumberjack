import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { WebAuthDataAccessModule } from '@nxpm-lumberjack/web/auth/data-access'
import { WebUiFormModule } from '@nxpm-lumberjack/web/ui/form'
import { AuthPageModule } from '@nxpm-lumberjack/web/auth/ui'
import { LoginComponent } from './login.component'

const routes: Routes = [{ path: '', component: LoginComponent }]

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WebUiFormModule, AuthPageModule, WebAuthDataAccessModule],
})
export class LoginModule {}
