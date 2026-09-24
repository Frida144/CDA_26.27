import { User } from './user.interface';

describe('User', () => {
  it('should accept a valid user shape', () => {
    const user: User = { name: 'Test', age: 30 };

    expect(user).toEqual({ name: 'Test', age: 30 });
  });
});
