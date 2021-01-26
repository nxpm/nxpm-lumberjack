import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminUserDetailComponent } from './admin-user-detail.component'

describe('UserDetailComponent', () => {
  let component: AdminUserDetailComponent
  let fixture: ComponentFixture<AdminUserDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUserDetailComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
