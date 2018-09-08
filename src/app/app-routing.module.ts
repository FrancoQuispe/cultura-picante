import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { ViajesComponent } from './viajes/viajes.component';
import { MusicaComponent } from './musica/musica.component';

const routes: Routes = [
    { path: 'inicioComponent', component:InicioComponent},
    { path: 'viajesComponent', component:ViajesComponent},
    { path: 'musicaComponent', component:MusicaComponent},
    { path: '**', component: InicioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
