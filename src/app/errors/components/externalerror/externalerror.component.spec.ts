import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalerrorComponent } from './externalerror.component';

describe('ExternalerrorComponent', () => {
  let component: ExternalerrorComponent;
  let fixture: ComponentFixture<ExternalerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExternalerrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExternalerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
