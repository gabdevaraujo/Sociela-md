/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrgaosService } from './orgaos.service';

describe('Service: Orgaos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgaosService]
    });
  });

  it('should ...', inject([OrgaosService], (service: OrgaosService) => {
    expect(service).toBeTruthy();
  }));
});
