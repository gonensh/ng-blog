import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../post';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit() {}
}
