import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { numberMatcher } from './users.matcher';
import { UsersGuard } from '../users.guard';
const user_routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        matcher: numberMatcher,
        component: GroupComponent,
        canDeactivate: [UsersGuard],
      },
      { path: ':userId', component: UserComponent },
    ],
  },
];
@NgModule({
  declarations: [UsersComponent, UserComponent, GroupComponent],
  imports: [CommonModule, RouterModule.forChild(user_routes)],
})
export class UsersModule {}
