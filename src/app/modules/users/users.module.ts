import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './screens/user/user.component';
import { UserAddComponent } from './screens/user-add/user-add.component';
import { UserListComponent } from './screens/user-list/user-list.component';
import { UserEditComponent } from './screens/user-edit/user-edit.component';
import { UserViewComponent } from './screens/user-view/user-view.component';



@NgModule({
  declarations: [UserComponent, UserAddComponent, UserListComponent, UserEditComponent, UserViewComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
