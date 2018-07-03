import { Component, OnInit } from '@angular/core';
import { NewBlogService } from '../../providers/new-blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  loading: boolean = true;
  posts: any[];
  constructor(public newblog: NewBlogService) { }

  ngOnInit() {

    this.newblog.posts().then((posts: any[]) => {

      setTimeout(() => {
        
        this.posts = posts;
        this.loading = false;
      }, 1 * 1000)// setTimeout
    })// this.newblog.posts
  }// ngOnInit
}// class