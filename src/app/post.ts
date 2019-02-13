export class Post {
  title: string;
  content: string;
  image?: string;
  categories?: string[];

  constructor(
    title: string,
    content: string,
    image: string = '',
    categories: string[] = []
  ) {
    this.title = title;
    this.content = content;
    this.image = image;
    this.categories = categories;
  }
}
