import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit() {}

  private previewPost() {
    alert(`⚠️ UNIMPLEMENTED FEATURE!
THIS SHOULD PREVIEW POST ID#${this.post.id}`);
  }
}
