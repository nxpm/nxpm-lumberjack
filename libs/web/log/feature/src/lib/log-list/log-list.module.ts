import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedUiIconModule } from '@nxpm-lumberjack/web/ui/icon'
import { LogListComponent } from './log-list.component'

@NgModule({
  declarations: [LogListComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: LogListComponent }]), SharedUiIconModule],
})
export class LogListModule {}
