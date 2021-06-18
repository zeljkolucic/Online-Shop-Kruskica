import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KorpaComponent } from './korpa/korpa.component';
import { KupacComponent } from './kupac/kupac.component';
import { NarudzbinaComponent } from './narudzbina/narudzbina.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RadnikComponent } from './radnik/radnik.component';

const routes: Routes = [
  {path: '', component: PrijavaComponent},
  {path: 'kupac', component: KupacComponent},
  {path: 'radnik', component: RadnikComponent},
  {path: 'narudzbina', component: NarudzbinaComponent},
  {path: 'korpa', component: KorpaComponent},
  {path: '**', component: PrijavaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
