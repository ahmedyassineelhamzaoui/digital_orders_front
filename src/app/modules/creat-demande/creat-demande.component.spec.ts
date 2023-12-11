import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatDemandeComponent } from './creat-demande.component';

describe('CreatDemandeComponent', () => {
  let component: CreatDemandeComponent;
  let fixture: ComponentFixture<CreatDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatDemandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
