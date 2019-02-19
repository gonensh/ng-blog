export class Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  image?: string;
  categories?: string[];

  constructor(post: Post) {
    this.id = post.id;
    this.userId = post.userId;
    this.title = post.title;
    this.body = post.body;
    this.image = post.image || '';
    this.categories = post.categories || [];
  }
}
