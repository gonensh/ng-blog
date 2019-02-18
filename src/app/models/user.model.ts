export class User {
  id: number;
  username: string;
  name?: string;
  email?: string;
  address?: object;
  phone?: string;
  website?: string;
  company?: object;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.name = user.name || '';
    this.email = user.email || '';
    this.address = user.address || {};
    this.phone = user.phone || '';
    this.website = user.website || '';
    this.company = user.company || {};
  }
}
