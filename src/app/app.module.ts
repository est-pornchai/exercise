import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

  
const routes: Routes = [

{path: 'formupdate', component: HeroDetailComponent},
{path: 'user', component: UserComponent},
{path: 'home', component: AppComponent}

];


@NgModule({
  declarations: [AppComponent, HeroDetailComponent, UserComponent],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

