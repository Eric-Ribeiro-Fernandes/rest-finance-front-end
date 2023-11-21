import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { LancarOperacaoComponent } from './components/main/lancar-operacao/lancar-operacao.component';

import { PesquiseTickerComponent } from './components/main/pesquise-ticker/pesquise-ticker.component';

import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PesquiseTickerCabecalhoComponent } from './components/main/pesquise-ticker/pesquise-ticker-cabecalho/pesquise-ticker-cabecalho.component';
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
import { PanelMenuModule } from 'primeng/panelmenu';
import { PesquiseTickerInformacoesComponent } from './components/main/pesquise-ticker/pesquise-ticker-informacoes/pesquise-ticker-informacoes.component';

registerLocaleData(ptBr);

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    MainComponent,
    MenuComponent,

    LancarOperacaoComponent,

    PesquiseTickerComponent,

    PesquiseTickerCabecalhoComponent,
    PesquiseTickerInformacoesComponent,
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
    PanelMenuModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
