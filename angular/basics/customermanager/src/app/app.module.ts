import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

import { RouteModule } from './route.module';
import { MenuComponent } from './core/menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent, MenuComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule,RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
