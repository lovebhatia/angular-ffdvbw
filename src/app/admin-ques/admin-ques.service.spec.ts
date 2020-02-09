import { TestBed } from '@angular/core/testing';

import { AdminQuesService } from './admin-ques.service';

describe('AdminQuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminQuesService = TestBed.get(AdminQuesService);
    expect(service).toBeTruthy();
  });
});
