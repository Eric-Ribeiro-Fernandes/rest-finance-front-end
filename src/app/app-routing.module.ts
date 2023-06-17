import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoOperacoesComponent } from './components/main/extrato-operacoes/extrato-operacoes.component';
import { LancarOperacaoComponent } from './components/main/lancar-operacao/lancar-operacao.component';
import { MonitoracaoComponent } from './components/main/monitoracao/monitoracao.component';
import { PesquiseTickerComponent } from './components/main/pesquise-ticker/pesquise-ticker.component';
import { PrecoMedioComponent } from './components/main/preco-medio/preco-medio.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';

const routes: Routes = [
  {path:"*", redirectTo:'dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path:'extrato-operacoes', component: ExtratoOperacoesComponent},
  {path:'lancar-operacao', component: LancarOperacaoComponent},
  {path:'monitoracao', component: MonitoracaoComponent},
  {path:'pesquise-ticker', component: PesquiseTickerComponent},
  {path:'preco-medio', component:PrecoMedioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
