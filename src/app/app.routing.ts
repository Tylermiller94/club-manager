import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserListComponent } from './user-list/user-list.component';
import { AboutComponent } from './about/about.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const appRoutes: Routes = [
  {
    path: 'members/:id',
    component: WelcomeComponent
  },
  {
    path: 'users',
    component: UserListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
