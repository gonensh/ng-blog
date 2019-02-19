import { Post } from './post.model';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post({ id: 0, userId: 0, title: '', body: '' })).toBeTruthy();
  });
});
