import { Component } from '@angular/core'
import { Log, LogLevel } from '@nxpm-lumberjack/web/core/data-access'
import { LogListLogger } from './log-list.logger'
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
              <button class="px-2 py-1" (click)="refreshEffect()">
                <ui-icon class="text-gray-500 hover:text-gray-200" icon="refresh"></ui-icon>
              </button>
            </div>
          </div>
        </div>
        <ng-container *ngFor="let item of vm.items">
          <div class="flex items-center py-1">
            <div class="pl-3">
              <ng-container *ngIf="item.user">
                <img
                  class="h-5 w-5 border border-white dark:border-gray-400 rounded-full"
                  [attr.src]="item.user.avatarUrl"
                  alt=""
                />
              </ng-container>
              <ng-container *ngIf="item.system">
                <img class="h-5 w-5 rounded-full" src="/assets/images/logo.png" alt="" />
              </ng-container>
            </div>
            <div class="px-3 py-1 whitespace-nowrap flex-grow">
              <div class="flex items-center justify-between">
                <button
                  (click)="toggleItem(item)"
                  class="text-xs flex font-medium text-gray-900 dark:text-gray-200 flex-grow font-mono cursor-pointer space-x-2"
                >
                  <span *ngIf="item.scope">[{{ item.scope }}]</span> <span>{{ item.message }}</span>
                </button>
                <div class="flex space-x-2 items-center">
                  <div class="whitespace-nowrap">
                    <span
                      [ngClass]="{
                        'bg-pink-100 text-pink-800': item.level === level.Critical,
                        'bg-yellow-100 text-yellow-800': item.level === level.Warning,
                        'bg-green-100 text-green-800': item.level === level.Info,
                        'bg-gray-100 text-gray-800': item.level === level.Debug,
                        'bg-red-100 text-red-800': item.level === level.Error,
                        'bg-blue-100 text-blue-800': item.level === level.Trace
                      }"
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >
                      {{ item.level }}
                    </span>
                  </div>
                  <div class="text-xs text-right text-gray-900 dark:text-gray-400">
                    {{ item.createdAt | date: 'medium' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div *ngIf="vm.open[item.id]" class="p-2">
            <pre class="text-xs dark:bg-gray-900 p-4 rounded-md">{{ item.payload | json }}</pre>
            <pre class="text-xs dark:bg-gray-900 p-4 rounded-md">{{ item | json }}</pre>
          </div>
        </ng-container>
        <div class="flex space-x-2 p-2 justify-center">
          <ng-container *ngFor="let lvl of levels">
            <button
              [ngClass]="{
                'bg-pink-100 text-pink-800': lvl === level.Critical,
                'bg-yellow-100 text-yellow-800': lvl === level.Warning,
                'bg-green-100 text-green-800': lvl === level.Info,
                'bg-gray-100 text-gray-800': lvl === level.Debug,
                'bg-red-100 text-red-800': lvl === level.Error,
                'bg-blue-100 text-blue-800': lvl === level.Trace
              }"
              class="px-2 py-0 rounded "
              (click)="testLevel(lvl)"
            >
              {{ lvl }}
            </button>
          </ng-container>
        </div>
      </div>
    </ng-container>
  `,
  providers: [LogListStore],
})
export class LogListComponent {
  readonly level = LogLevel
  readonly levels = Object.keys(LogLevel)
  readonly vm$ = this.store.vm$
  constructor(private readonly store: LogListStore, private readonly logListLogger: LogListLogger) {}

  toggleItem(item: Log) {
    this.store.toggleItemEffect(item.id)
  }

  refreshEffect() {
    this.store.refreshEffect()
  }

  setLimit(number: number) {
    this.store.setLimit(number)
  }

  testLevel(level) {
    switch (level) {
      case LogLevel.Critical:
        return this.testCritical()
      case LogLevel.Debug:
        return this.testDebug()
      case LogLevel.Error:
        return this.testError()
      case LogLevel.Info:
        return this.testInfo()
      case LogLevel.Trace:
        return this.testTrace()
      case LogLevel.Warning:
        return this.testWarning()
    }
  }

  testCritical() {
    this.logListLogger.criticalLog()
  }

  testDebug() {
    this.logListLogger.debugLog()
  }

  testError() {
    this.logListLogger.errorLog()
  }

  testInfo() {
    this.logListLogger.infoLog()
  }

  testWarning() {
    this.logListLogger.warningLog()
  }

  testTrace() {
    this.logListLogger.traceLog()
  }
}
