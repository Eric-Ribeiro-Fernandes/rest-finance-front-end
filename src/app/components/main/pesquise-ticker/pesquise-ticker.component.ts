import { Component, Input, OnInit } from '@angular/core';
import { Informacoes } from 'src/app/models/informacoes';
import { ApiFinanceService } from 'src/app/services/api-finance.service';
import { PlotlyTemplate } from 'src/app/models/plotly-template';
import { Cotacao } from 'src/app/models/cotacao';

@Component({
  selector: 'app-pesquise-ticker',
  templateUrl: './pesquise-ticker.component.html',
  styleUrls: ['./pesquise-ticker.component.css'],
})
export class PesquiseTickerComponent implements OnInit {
  public respostaInformacoes: Informacoes = {};
  public respostaCandle?: PlotlyTemplate;
  public respostaCotacaoBovespa?: Cotacao;
  public respostaCotacaoAtivoDia?: Cotacao;
  public bovespaHoje?: number;
  public bovespaAnterior?: number;

  public msgInfoSemTicker = {
    text: 'Informe um ativo para ser buscado...',
    severity: 'info',
  };

  constructor(private service: ApiFinanceService) {}

  ngOnInit(): void {}

  public possuiDados(): boolean {
    if (this.respostaInformacoes.longName) {
      return true;
    } else return false;
  }

  public variacaoDia() {
    const precoAtual = this.respostaInformacoes.currentPrice;
    const precoUltimoFechamento = this.respostaInformacoes.previousClose;

    if (precoAtual && precoUltimoFechamento) {
      const variacao =
        ((precoAtual - precoUltimoFechamento) / precoUltimoFechamento) * 100;

      if (variacao > 0) {
        return `+ ${(precoAtual - precoUltimoFechamento).toFixed(
          2
        )} (${variacao.toFixed(2)}%) ↑`;
      } else
        return ` ${(precoAtual - precoUltimoFechamento).toFixed(
          2
        )} (${variacao.toFixed(2)}%) ↓`;
    } else return '';
  }

  public variacaoDiaBovespa() {
    const tamanhoArray = this.respostaCotacaoBovespa?.data.length
      ? this.respostaCotacaoBovespa?.data.length
      : 0;
    const precoAtual = this.respostaCotacaoBovespa?.data[tamanhoArray - 1];
    const precoUltimoFechamento =
      this.respostaCotacaoBovespa?.data[tamanhoArray - 2];

    if (precoAtual && precoUltimoFechamento) {
      const variacao =
        ((precoAtual - precoUltimoFechamento) / precoUltimoFechamento) * 100;

      if (variacao > 0) {
        return `+ ${(precoAtual - precoUltimoFechamento).toFixed(
          2
        )} (${variacao.toFixed(2)}%) ↑`;
      } else
        return ` ${(precoAtual - precoUltimoFechamento).toFixed(
          2
        )} (${variacao.toFixed(2)}%) ↓`;
    } else return '';
  }
  public classeVariacao(valor: number) {
    if (valor) {
      if (valor > 0) {
        return true;
      } else return false;
    } else return '';
  }

  public dados(): void {
    this.respostaInformacoes = this.service.respostaInformacoes;
    this.respostaCandle = this.service.respostaCandle;
    this.respostaCotacaoBovespa = this.service.respostaCotacaoBovespa;
    this.respostaCotacaoAtivoDia = this.service.respostaCotacaoAtivoDia;
    this.bovespaHoje =
      this.respostaCotacaoBovespa?.data[
        this.respostaCotacaoBovespa?.data.length - 1
      ];

    this.bovespaAnterior =
      this.respostaCotacaoBovespa?.data[
        this.respostaCotacaoBovespa?.data.length - 2
      ];
  }
}
