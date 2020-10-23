import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormsPageComponent } from './user-forms-page.component';

describe('UserFormsPageComponent', () => {
  let component: UserFormsPageComponent;
  let fixture: ComponentFixture<UserFormsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
