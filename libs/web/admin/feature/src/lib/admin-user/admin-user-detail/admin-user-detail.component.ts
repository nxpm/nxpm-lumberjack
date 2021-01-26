import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateUserInput, Role } from '@nxpm-lumberjack/web/core/data-access'
import { WebUiFormField } from '@nxpm-lumberjack/web/ui/form'
import { AdminUserDetailStore } from './admin-user-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Edit user ' + vm.user?.username" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.user">
        <user-form [form]="form" [fields]="fields" [user]="vm.user" (submitForm)="updateUser($event)"></user-form>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminUserDetailStore],
})
export class AdminUserDetailComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})
  fields = [
    WebUiFormField.radio('role', {
      label: 'Role',
      required: true,
      options: Object.keys(Role).map((value) => ({ value, label: value })),
    }),
    WebUiFormField.input('email', { label: 'Email', required: true }),
    WebUiFormField.input('username', { label: 'Username' }),
    WebUiFormField.input('firstName', { label: 'First name' }),
    WebUiFormField.input('lastName', { label: 'Last name' }),
    WebUiFormField.input('phone', { label: 'Phone' }),
    WebUiFormField.input('avatarUrl', { label: 'Avatar Url' }),
    WebUiFormField.input('location', { label: 'Location' }),
    WebUiFormField.textarea('bio', { label: 'Bio' }),
  ]

  constructor(private readonly store: AdminUserDetailStore) {}

  updateUser(input: AdminUpdateUserInput) {
    const { role, email, username, firstName, lastName, phone, avatarUrl, location, bio } = input
    this.store.updateUserEffect({ role, email, username, firstName, lastName, phone, avatarUrl, location, bio })
  }
}
