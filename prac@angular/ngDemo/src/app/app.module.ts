import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopNavComponent } from './my-container/top-nav/top-nav.component';
import { HeaderComponent } from './my-container/header/header.component';
import { Texsec1Component } from './my-container/texsec1/texsec1.component';
import { Texsec2Component } from './my-container/texsec2/texsec2.component';
import { EventbindingComponent } from './my-container/eventbinding/eventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    // ProductListComponent,
    TopNavComponent,
    MyContainerComponent,
    HeaderComponent,
    Texsec1Component,
    Texsec2Component,
    EventbindingComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
