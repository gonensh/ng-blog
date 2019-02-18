import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User({ id: 0, username: 'test' })).toBeTruthy();
  });
});
