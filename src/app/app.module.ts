import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateBugFormComponent } from './create-bug-form/create-bug-form.component';
import { SearchbugformComponent } from './searchbugform/searchbugform.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component:   CreateBugFormComponent }, //default, Home page
  { path: 'search', component: SearchbugformComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateBugFormComponent,
    SearchbugformComponent
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
