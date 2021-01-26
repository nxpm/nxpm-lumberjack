import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () => import('./admin-user-list/admin-user-list.module').then((m) => m.AdminUserListModule),
          },
          {
            path: 'create',
            loadChildren: () =>
              import('./admin-user-create/admin-user-create.module').then((m) => m.AdminUserCreateModule),
          },
          {
            path: ':userId',
            loadChildren: () =>
              import('./admin-user-detail/admin-user-detail.module').then((m) => m.AdminUserDetailModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminUserFeatureModule {}
