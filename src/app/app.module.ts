import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MenuComponent} from './menu/menu.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path:'',component: HomeComponent},
    {path: 'about',component: AboutComponent},
  ])],
  declarations: [ AppComponent, TopBarComponent,MenuComponent, HelloComponent, HomeComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
