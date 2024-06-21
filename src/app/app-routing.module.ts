import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArteCulinarioComponent } from "./arte-culinario/arte-culinario.component";
import { ControlIncendiosComponent } from "./control-incendios/control-incendios.component";
import { DesarrolloSFComponent } from "./desarrollo-sf/desarrollo-sf.component";
import { GuiaNacionalComponent } from "./guia-nacional/guia-nacional.component";
import { MarketingComponent } from "./marketing/marketing.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { ModasComponent } from "./modas/modas.component";

const routes: Routes = [
 { path: 'catalogo', component:CatalogoComponent},
 { path: '', redirectTo: '/catalogo', pathMatch: 'full'},
 { path: 'arte-culinario', component: ArteCulinarioComponent },
 { path: 'control-incendios', component: ControlIncendiosComponent },
 { path:  'modas', component: ModasComponent},
 { path: 'desarrollo-sf', component: DesarrolloSFComponent },
 { path: 'guia-nacional', component: GuiaNacionalComponent },
 { path: 'marketing', component: MarketingComponent },
 
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{};