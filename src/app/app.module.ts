import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { NavComponent } from './nav/nav.component';
import { PopularPagesComponent } from './popular-pages/popular-pages.component';
import { TopNewsComponent } from './top-news/top-news.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PopularPagesComponent,
    TopNewsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
