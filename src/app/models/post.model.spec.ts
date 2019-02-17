import { Post } from './post';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post('Post Title', 'Post Content')).toBeTruthy();
  });
});
