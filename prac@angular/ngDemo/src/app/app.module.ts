import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopNavComponent } from './my-container/top-nav/top-nav.component';
import { HeaderComponent } from './my-container/header/header.component';
import { Texsec1Component } from './my-container/texsec1/texsec1.component';
import { Texsec2Component } from './my-container/texsec2/texsec2.component';
import { EventbindingComponent } from './my-container/eventbinding/eventbinding.component';
import { FormsComponent } from './my-container/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './my-container/reactive-form/reactive-form.component';
import { ParentComponent } from './my-container/parent/parent.component';
import { ChildComponent } from './my-container/child/child.component';
import { ToDoComponent } from './my-container/to-do/to-do.component';
import { CardComponent } from './my-container/card/card.component';
import { CardService } from './my-container/cardServices/card.service';
import { Child2Component } from './my-container/to-do2/child2/child2.component';
import { Parent2Component } from './my-container/to-do2/parent2/parent2.component';
import { HttpFetchComponent } from './my-container/http-fetch/http-fetch.component';
import { Card1Component } from './my-container/subjectDemo/card1/card1.component';
import { Card2Component } from './my-container/subjectDemo/card2/card2.component';
import { Card3Component } from './my-container/subjectDemo/card3/card3.component';
import { Card4Component } from './my-container/subjectDemo/card4/card4.component';
import { Forms2Component } from './my-container/forms2/forms2.component';


const appRoutes: Routes = [
  {path:'', component: HeaderComponent},
  {path:'text',component: Texsec1Component},
  {path:'form', component: FormsComponent},
  {path:'parent', component: ParentComponent},
  {path:'todo', component: ToDoComponent},
  {path:'todo2', component: Parent2Component},
  {path:'cards', component: CardComponent},
  {path:'posts', component: HttpFetchComponent},
  {path:'subject', component: Card1Component}

]


@NgModule({
  declarations: [
    AppComponent,
    // ProductListComponent,
    TopNavComponent,
    MyContainerComponent,
    HeaderComponent,
    Texsec1Component,
    Texsec2Component,
    EventbindingComponent,
    FormsComponent,
    ReactiveFormComponent,
    ParentComponent,
    ChildComponent,
    ToDoComponent,
    CardComponent,
    Child2Component,
    Parent2Component,
    HttpFetchComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Forms2Component
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
