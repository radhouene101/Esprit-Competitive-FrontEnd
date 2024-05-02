import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedUserChatComponent } from './selected-user-chat.component';

describe('SelectedUserChatComponent', () => {
  let component: SelectedUserChatComponent;
  let fixture: ComponentFixture<SelectedUserChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedUserChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedUserChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
