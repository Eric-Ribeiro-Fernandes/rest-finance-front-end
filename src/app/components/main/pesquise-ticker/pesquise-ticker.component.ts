import { Component, Input, OnInit } from '@angular/core';
import { Informacoes } from 'src/app/models/informacoes';
import { ApiFinanceService } from 'src/app/services/api-finance.service';
import { PlotlyTemplate } from 'src/app/models/plotly-template';
import { Cotacao } from 'src/app/models/cotacao';
import { Dividendos } from 'src/app/models/dividendos';
import { json } from 'd3';

@Component({
  selector: 'app-pesquise-ticker',
  templateUrl: './pesquise-ticker.component.html',
  styleUrls: ['./pesquise-ticker.component.css'],
})
export class PesquiseTickerComponent implements OnInit {
  respostaInformacoes?: Informacoes;
  respostaCandle?: PlotlyTemplate;
  respostaCotacaoBovespa?: Cotacao;
  respostaCotacaoAtivoDia?: Cotacao;
  respostaDividendos?: Dividendos;
  ticker = '';
  ngOnInit(): void {}

  getRespostaCandle(event: PlotlyTemplate) {
    this.respostaCandle = event;
  }

  getRespostaCotacaoAtivoDia(event: Cotacao) {
    this.respostaCotacaoAtivoDia = event;
  }

  getRespostaCotacaoBovespa(event: Cotacao) {
    this.respostaCotacaoBovespa = event;
  }
  getRespostaDividendos(event: Dividendos) {
    this.respostaDividendos = event;
  }
  getTicker(event: string) {
    this.ticker = event;
  }

  getRespostaInformacoes(event: Informacoes) {
    this.respostaInformacoes = event;
  }
}
