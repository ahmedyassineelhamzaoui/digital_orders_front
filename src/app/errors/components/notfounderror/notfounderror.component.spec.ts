import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfounderrorComponent } from './notfounderror.component';

describe('NotfounderrorComponent', () => {
  let component: NotfounderrorComponent;
  let fixture: ComponentFixture<NotfounderrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotfounderrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotfounderrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
