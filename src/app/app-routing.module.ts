import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LancarOperacaoComponent } from './components/main/lancar-operacao/lancar-operacao.component';

import { PesquiseTickerComponent } from './components/main/pesquise-ticker/pesquise-ticker.component';

const routes: Routes = [
  { path: '*', redirectTo: 'pesquise-ticker' },

  { path: 'lancar-operacao', component: LancarOperacaoComponent },

  { path: 'pesquise-ticker', component: PesquiseTickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
