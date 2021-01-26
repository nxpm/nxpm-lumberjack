import { Component } from '@angular/core'
import { AdminUserDetailStore } from './admin-user-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'User ' + vm.user?.username" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.user">
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-20 w-20">
                <img class="h-20 w-20 rounded-full" [attr.src]="vm.user?.avatarUrl" alt="" />
              </div>
              <div class="ml-4">
                <div class="text-lg font-medium text-gray-900 dark:text-gray-200">
                  <a [routerLink]="vm.user?.id">
                    {{ vm.user?.name }}
                  </a>
                </div>
                <div class="text-lg text-gray-500">
                  {{ vm.user?.email }}
                </div>
              </div>
            </div>
            <div class="flex space-x-2">
              <a
                routerLink="password"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-300 bg-indigo-900 border-indigo-600  hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Change Password</a
              >
              <a
                routerLink="edit"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-300 bg-indigo-900 border-indigo-600  hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Edit</a
              >
            </div>
          </div>
        </div>
        <pre class="mt-6 dark:bg-gray-800 p-4 text-xs shadow rounded-md">{{ vm.user | json }}</pre>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminUserDetailStore],
})
export class AdminUserDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: AdminUserDetailStore) {}
}
