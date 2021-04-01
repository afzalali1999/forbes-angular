import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog.service';
import { Blog } from '../../interfaces/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs()
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs.reverse()
    });
  }

  onDeleteBlog(id: string): void {
    console.log('delete with id', id)
    this.blogs = this.blogs.filter(blog => blog._id != id)
  }

}
