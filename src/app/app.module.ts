import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { NewBlogService } from './providers/new-blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent,
    Error404PageComponent,
    HeaderComponent,
    FooterComponent,
    PostCardComponent,
    PostComponent,
    PostsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [NewBlogService],
  bootstrap: [AppComponent],
})
export class AppModule { }
