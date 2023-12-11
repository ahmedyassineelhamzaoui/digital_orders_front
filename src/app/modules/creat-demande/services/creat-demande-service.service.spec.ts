import { TestBed } from '@angular/core/testing';

import { CreatDemandeServiceService } from './creat-demande-service.service';

describe('CreatDemandeServiceService', () => {
  let service: CreatDemandeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatDemandeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
