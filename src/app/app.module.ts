import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateBugFormComponent } from './create-bug-form/create-bug-form.component';
import { SearchbugformComponent } from './searchbugform/searchbugform.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateBugFormComponent } from './update-bug-form/update-bug-form.component';
import { EllipsisPipe } from './Ellipse';

const appRoutes: Routes = [
  { path: '', component:    HomeComponent }, //default, Home page
  { path: 'create', component: CreateBugFormComponent },
  { path: 'search', component: SearchbugformComponent },
  { path: 'update', component: UpdateBugFormComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateBugFormComponent,
    SearchbugformComponent,
    HomeComponent,
    UpdateBugFormComponent,
    EllipsisPipe,
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule, FormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
