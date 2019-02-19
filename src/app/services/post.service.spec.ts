import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { PostService } from './post.service';

describe('PostService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });

  it('should fetch post data from the Typicode API endpoint', inject(
    [HttpTestingController, PostService],
    (httpMock: HttpTestingController, postService: PostService) => {
      postService.getPosts(2).subscribe(data => {
        expect(data.length).toBe(4);
        expect(data[2].id).toEqual(13);
      });

      const req = httpMock.expectOne(
        'https://jsonplaceholder.typicode.com/posts?userId=2'
      );
      expect(req.request.method).toEqual('GET');

      req.flush([
        {
          userId: 2,
          id: 11,
          title: 'et ea vero quia laudantium autem',
          body:
            'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus'
        },
        {
          userId: 2,
          id: 12,
          title: 'in quibusdam tempore odit est dolorem',
          body:
            'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil'
        },
        {
          userId: 2,
          id: 13,
          title: 'dolorum ut in voluptas mollitia et saepe quo animi',
          body:
            'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti'
        },
        {
          userId: 2,
          id: 14,
          title: 'voluptatem eligendi optio',
          body:
            'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui '
        }
      ]);
    }
  ));
});
