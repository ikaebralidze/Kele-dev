import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ProjectComponent } from './project-content/project/project.component';
import { ProjectContentModule } from './project-content/project-content.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'news', component: NewsPageComponent },
  {
    path: '',
    loadChildren: () =>
      import('../app/project-content/project-content.module').then(
        (m) => m.ProjectContentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
