import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminUserPasswordComponent } from './admin-user-password.component'

describe('AdminUserPasswordComponent', () => {
  let component: AdminUserPasswordComponent
  let fixture: ComponentFixture<AdminUserPasswordComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUserPasswordComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserPasswordComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
