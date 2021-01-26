import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { User } from '@nxpm-lumberjack/web/core/data-access'

@Component({
  selector: 'user-form',
  template: `
    <div class="shadow overflow-hidden sm:rounded-lg">
      <div class="bg-gray-50 dark:bg-gray-800 px-6 py-4">
        <ui-form [form]="form" [model]="user" [fields]="fields" (submitForm)="submitForm.emit($event)">
          <button
            [disabled]="form.touched && !form?.valid"
            type="submit"
            class="flex mx-auto bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 justify-center px-12 py-2 border border-transparent shadow-sm text-lg font-medium rounded-md text-gray-300  hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </ui-form>
      </div>
    </div>
  `,
})
export class AdminUserFormComponent {
  @Input() form = new FormGroup({})
  @Input() user: User = {}
  @Output() submitForm = new EventEmitter()
  @Input() fields = []
}
