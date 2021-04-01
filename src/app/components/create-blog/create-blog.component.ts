import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  blog: Blog = {
    title: '',
    imageUrl: '',
    content: '',
    author: ''
  }

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.blogService.createBlog(this.blog).subscribe(() => {
      this.router.navigateByUrl('/');
    })
  }
}
