import { TestBed, inject } from '@angular/core/testing';

import { NewBlogService } from './new-blog.service';

describe('NewBlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewBlogService]
    });
  });

  it('should be created', inject([NewBlogService], (service: NewBlogService) => {
    expect(service).toBeTruthy();
  }));
});
