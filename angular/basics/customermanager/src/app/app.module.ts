import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

import { RouteModule } from './route.module';
import { MenuComponent } from './core/menu.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/coremodule';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './core/service/service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule,RouteModule,CoreModule,HttpClientModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
