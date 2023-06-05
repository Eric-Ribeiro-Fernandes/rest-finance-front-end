import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { LancarOperacaoComponent } from './components/main/lancar-operacao/lancar-operacao.component';
import { ExtratoOperacoesComponent } from './components/main/extrato-operacoes/extrato-operacoes.component';
import { PrecoMedioComponent } from './components/main/preco-medio/preco-medio.component';
import { PesquiseTickerComponent } from './components/main/pesquise-ticker/pesquise-ticker.component';
import { MonitoracaoComponent } from './components/main/monitoracao/monitoracao.component';
import {  HttpClientModule } from '@angular/common/http';

import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    MainComponent,
    MenuComponent,
    HomeComponent,
    DashboardComponent,
    LancarOperacaoComponent,
    ExtratoOperacoesComponent,
    PrecoMedioComponent,
    PesquiseTickerComponent,
    MonitoracaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
