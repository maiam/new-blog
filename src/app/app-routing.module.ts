import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

const routes: Routes = [
  // home
  {
    path: '',
    component: HomePageComponent
  },
  // blog post
  {
    path: ':slug/:id',
    component: PostPageComponent
  },
  // handling 404
  {
    path: '**',
    component: Error404PageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [ RouterModule, ]
})

export class AppRoutingModule { }
