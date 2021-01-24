import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiSidebarPageModule } from '@nxpm-lumberjack/web/ui/page'
import { WebUiSidebarPageComponent } from './web-ui-sidebar-page.component'

@NgModule({
  declarations: [WebUiSidebarPageComponent],
  exports: [WebUiSidebarPageComponent],
  imports: [CommonModule, RouterModule, WebUiSidebarPageModule],
})
export class WebUiSidebarPageModule {}
