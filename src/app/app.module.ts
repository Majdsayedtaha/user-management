import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListsComponent } from './user-lists/user-lists.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListsComponent,
    SideNavComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
