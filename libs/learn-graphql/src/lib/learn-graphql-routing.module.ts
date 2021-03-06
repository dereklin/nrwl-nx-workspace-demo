import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateLinkComponent } from './components/create-link/create-link.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { LoginComponent } from './components/login/login.component';
import { LearnGraphqlComponent } from './learn-graphql.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: LearnGraphqlComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'new/1'
      },
      {
        path: 'new/:page',
        component: LinkListComponent,
        pathMatch: 'full'
      },
      {
        path: 'top',
        component: LinkListComponent,
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreateLinkComponent,
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: SearchComponent,
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnGraphqlRoutingModule {}
