import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { LancarOperacaoComponent } from './components/main/lancar-operacao/lancar-operacao.component';
import { ExtratoOperacoesComponent } from './components/main/extrato-operacoes/extrato-operacoes.component';
import { PrecoMedioComponent } from './components/main/preco-medio/preco-medio.component';
import { PesquiseTickerComponent } from './components/main/pesquise-ticker/pesquise-ticker.component';
import { MonitoracaoComponent } from './components/main/monitoracao/monitoracao.component';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PesquiseTickerCabecalhoComponent } from './components/cabecalho/pesquise-ticker-cabecalho/pesquise-ticker-cabecalho.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MessagesModule } from 'primeng/messages';
import { FieldsetModule } from 'primeng/fieldset';
import {
  DatePipe,
  CurrencyPipe,
  PercentPipe,
  DecimalPipe,
  UpperCasePipe,
} from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ChartModule } from 'primeng/chart';
import { NgApexchartsModule } from 'ng-apexcharts';

registerLocaleData(ptBr);

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    MainComponent,
    MenuComponent,
    DashboardComponent,
    LancarOperacaoComponent,
    ExtratoOperacoesComponent,
    PrecoMedioComponent,
    PesquiseTickerComponent,
    MonitoracaoComponent,
    PesquiseTickerCabecalhoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    PlotlyModule,
    ScrollPanelModule,
    MessagesModule,
    FieldsetModule,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    DecimalPipe,
    TableModule,
    UpperCasePipe,
    TabViewModule,
    ChartModule,
    NgApexchartsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
