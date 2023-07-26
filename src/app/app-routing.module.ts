import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',

    component: HomeComponent,
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('../app/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/project-content/project-content.module').then(
        (m) => m.ProjectContentModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/news/news.module').then((m) => m.NewsModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
