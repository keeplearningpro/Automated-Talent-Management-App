import { TestBed } from '@angular/core/testing';

import { SearchCertificationDatabaseService } from './search-certification-database.service';

describe('SearchCertificationDatabaseService', () => {
  let service: SearchCertificationDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCertificationDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
