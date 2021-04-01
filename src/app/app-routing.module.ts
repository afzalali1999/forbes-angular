import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component'
import { CreateBlogComponent } from './components/create-blog/create-blog.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'blogs/new', component: CreateBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
