import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageExampleComponent } from './views/page-example/page-example.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AtivacaoChipComponent } from './views/pre-pago/ativacao-chip/ativacao-chip.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ativacao-chip-pre-pago', component: AtivacaoChipComponent },
  { path: 'page-example', component: PageExampleComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
