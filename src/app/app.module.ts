import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProfileComponent} from './components/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {UserResource} from './resources/UserResource';
import { ReposComponent } from './components/repos/repos.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { SearchComponent } from './components/search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchResource} from './resources/SearchResource';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ReposComponent,
    FromNowPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserResource,
    SearchResource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
