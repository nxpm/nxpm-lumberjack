import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK, CorePaging, Log } from '@nxpm-lumberjack/web/core/data-access'
import { WebUtilLogService } from '@nxpm-lumberjack/web/util/log'
import { switchMap, tap, withLatestFrom } from 'rxjs/operators'
import { LogListLogger } from './log-list.logger'

interface LogListState {
  items?: Log[]
  open?: {}
  loading?: boolean
  paging: CorePaging
}

@Injectable()
export class LogListStore extends ComponentStore<LogListState> {
  constructor(private readonly sdk: ApolloAngularSDK, private readonly logListLogger: LogListLogger) {
    super({ paging: { limit: 10, skip: 0 }, open: {} })
    this.loadItemsEffect(this.paging$)
  }

  readonly paging$ = this.select(this.state$, (s) => s.paging)
  readonly items$ = this.select(this.state$, (s) => s.items)
  readonly open$ = this.select(this.state$, (s) => s.open)
  readonly vm$ = this.select(this.items$, this.paging$, this.open$, (items, paging, open) => ({ items, paging, open }))

  readonly setLimit = this.updater<number>((state, limit) => ({
    ...state,
    paging: { ...state.paging, limit },
  }))

  readonly toggleItemEffect = this.updater<string>((state, itemId) => ({
    ...state,
    open: { ...state.open, [itemId]: !state.open[itemId] },
  }))

  readonly refreshEffect = this.effect(($) =>
    $.pipe(
      withLatestFrom(this.paging$),
      tap(([_, input]) => this.loadItemsEffect(input)),
    ),
  )

  readonly loadItemsEffect = this.effect<CorePaging>((paging$) =>
    paging$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(({ skip, limit, total }) =>
        this.sdk.adminLogs({ input: { skip, limit } }, { fetchPolicy: 'no-cache' }).pipe(
          tapResponse(
            (res) => {
              const count = res.data.count
              if (count.limit !== limit || count.skip !== skip || count.total !== total) {
                this.patchState({ paging: res.data.count })
              }
              this.patchState({ items: res.data?.items })
            },
            (e: any) => this.logListLogger.errorFetchingLogs(e),
          ),
        ),
      ),
    ),
  )
}
