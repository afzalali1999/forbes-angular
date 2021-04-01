import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../../services/blog.service';

import { Blog } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  @Input() blog?: Blog;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  onClickDelete(id: string): void {
    this.blogService.deleteBlog(id).subscribe(() => {
      this.newItemEvent.emit(id);
    });
  }

}
