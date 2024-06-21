import { AppComponent } from './app.component';
import { ArteCulinarioComponent } from "./arte-culinario/arte-culinario.component";
import { ControlIncendiosComponent } from "./control-incendios/control-incendios.component";
import { DesarrolloSFComponent } from "./desarrollo-sf/desarrollo-sf.component";
import { GuiaNacionalComponent } from "./guia-nacional/guia-nacional.component";
import { MarketingComponent } from "./marketing/marketing.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './static/header/header.component';
import { ModasComponent } from './modas/modas.component';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ArteCulinarioComponent,
        ModasComponent,
        ControlIncendiosComponent,
        DesarrolloSFComponent,
        GuiaNacionalComponent,
        MarketingComponent,
        CatalogoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }