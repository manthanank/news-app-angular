import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBusinessHeadlinesComponent } from './top-business-headlines/top-business-headlines.component';
import { TopGeneralHeadlinesComponent } from './top-general-headlines/top-general-headlines.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { TopHealthHeadlinesComponent } from './top-health-headlines/top-health-headlines.component';
import { TopScienceHeadlinesComponent } from './top-science-headlines/top-science-headlines.component';
import { TopSportsHeadlinesComponent } from './top-sports-headlines/top-sports-headlines.component';

const routes: Routes = [
  { path: '', redirectTo: 'top-headlines', pathMatch: 'full' },
  { path: 'top-headlines', component: TopHeadlinesComponent},
  { path: 'top-business-headlines', component: TopBusinessHeadlinesComponent},
  { path: 'top-general-headlines', component: TopGeneralHeadlinesComponent},
  { path: 'top-health-headlines', component: TopHealthHeadlinesComponent},
  { path: 'top-science-headlines', component: TopScienceHeadlinesComponent},
  { path: 'top-sports-headlines', component: TopSportsHeadlinesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
