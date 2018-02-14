import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateLinkComponent } from './components/create-link/create-link.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { LoginComponent } from './components/login/login.component';
import { LearnGraphqlComponent } from './learn-graphql.component';

const routes: Routes = [
  {
    path: '',
    component: LearnGraphqlComponent,
    children: [
      { path: '', component: LinkListComponent, pathMatch: 'full' },
      {
        path: 'create',
        component: CreateLinkComponent,
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
