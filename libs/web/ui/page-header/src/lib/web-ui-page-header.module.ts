import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderComponent } from './web-ui-page-header.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiPageHeaderComponent],
  exports: [WebUiPageHeaderComponent],
})
export class WebUiPageHeaderModule {}
