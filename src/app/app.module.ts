/* Vendor Module Begin */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Vendor Module End */

/* Modules Begin */
import {TodoModule} from "./components/todo/todo.module";
/* Modules End */

/* Component Begin */
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
/* Component End */

/* Services Begin */
import {TodoService} from "./services/todo.service";
/* Services End */

/* Routing Module Begin */
import {AppRoutingModule} from "./app.router";
/* Routing Module End */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    TodoModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    TodoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
