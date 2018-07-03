import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewBlogService } from '../../providers/new-blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  post: any = {};
  constructor(

    public activatedRoute: ActivatedRoute,
    public router: Router,
    public newblog: NewBlogService,
  ){ 
    this.activatedRoute
    .params
    .subscribe(
      params => {
        let id = params['id'];
        this.newblog.post(id)
        .then((post:any) => {
          this.post = post;
        })
        .catch((e) => {
          console.error(e);
          this.router.navigate(['/404']);
        })
      });
    }

    ngOnInit() { }

}// class
