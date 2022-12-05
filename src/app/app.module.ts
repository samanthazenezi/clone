import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniMenuComponent } from './components/mini-menu/mini-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { FaixaComponent } from './components/faixa/faixa.component';
import { BannerComponent } from './components/banner/banner.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CupomComponent } from './components/cupom/cupom.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniMenuComponent,
    MenuComponent,
    FaixaComponent,
    BannerComponent,
    MarcasComponent,
    SobreComponent,
    CupomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
