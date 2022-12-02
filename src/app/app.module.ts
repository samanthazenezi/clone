import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniMenuComponent } from './components/mini-menu/mini-menu.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { FaixaComponent } from './components/faixa/faixa.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniMenuComponent,
    NavComponent,
    MenuComponent,
    FaixaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
