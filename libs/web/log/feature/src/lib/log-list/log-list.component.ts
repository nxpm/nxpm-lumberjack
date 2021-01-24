import { Component } from '@angular/core'
import { Log } from '@nxpm-lumberjack/web/core/data-access'
import { LogListStore } from './log-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div
        class="shadow rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col divide-y divide-gray-200 dark:divide-gray-700 justify-center "
      >
        <div class="p-4">
          <div class="flex items-center justify-between">
            <div class="flex-grow"></div>
            <div class="flex-grow flex space-x-2 items-center justify-end">
              <div class="text-sm text-right text-gray-700 dark:text-gray-500">
                Showing {{ vm.paging?.limit }} of {{ vm.paging?.total }}
              </div>
              <button class="px-2 py-1 rounded-md border border-gray-600" (click)="setLimit(10)">10</button>
              <button class="px-2 py-1 rounded-md border border-gray-600" (click)="setLimit(20)">20</button>
              <button class="px-2 py-1 rounded-md border border-gray-600" (click)="setLimit(50)">50</button>
            </div>
          </div>
        </div>
        <ng-container *ngFor="let item of vm.items">
          <div class="flex items-center py-1">
            <div class="p-2 whitespace-nowrap flex space-x-2">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {{ item.level }}
              </span>
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                System
              </span>
            </div>
            <div class="p-2 whitespace-nowrap flex-grow">
              <div class="flex items-center justify-between">
                <div class="text-sm font-medium text-gray-900 dark:text-gray-200 flex-grow">
                  {{ item.message }}
                </div>
                <div class="flex space-x-2 items-center">
                  <button (click)="toggleItem(item)" class="text-xs text-right text-gray-700 dark:text-gray-600">
                    Payload
                  </button>
                  <div class="text-sm text-right text-gray-900 dark:text-gray-400">
                    {{ item.createdAt | date: 'medium' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div *ngIf="vm.open[item.id]">
            <pre class=" p-4 rounded-md">{{ item.payload | json }}</pre>
          </div>
        </ng-container>
      </div>
    </ng-container>
  `,
  providers: [LogListStore],
})
export class LogListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: LogListStore) {}

  toggleItem(item: Log) {
    this.store.toggleItemEffect(item.id)
  }
  //
  // nextPage() {
  //   this.store.nextPage()
  // }
  setLimit(number: number) {
    this.store.setLimit(number)
  }
}
