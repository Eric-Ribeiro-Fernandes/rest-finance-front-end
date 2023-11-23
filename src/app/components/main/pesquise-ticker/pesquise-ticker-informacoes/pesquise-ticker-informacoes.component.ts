import { Component, Input, OnInit } from '@angular/core';
import { Informacoes } from 'src/app/models/informacoes';
import { ApiFinanceService } from 'src/app/services/api-finance.service';
import { PlotlyTemplate } from 'src/app/models/plotly-template';
import { Cotacao } from 'src/app/models/cotacao';
import { Dividendos } from 'src/app/models/dividendos';
import { json } from 'd3';

@Component({
  selector: 'app-pesquise-ticker-informacoes',
  templateUrl: './pesquise-ticker-informacoes.component.html',
  styleUrls: ['./pesquise-ticker-informacoes.component.css'],
})
export class PesquiseTickerInformacoesComponent implements OnInit {
  @Input() respostaInformacoes?: Informacoes;
  @Input() respostaCandle?: PlotlyTemplate;
  @Input() respostaCotacaoBovespa?: Cotacao;
  @Input() respostaCotacaoAtivoDia?: Cotacao;
  @Input() bovespaHoje?: number;
  @Input() bovespaAnterior?: number;
  @Input() respostaDividendos?: Dividendos;

  public msgInfoSemTicker = {
    text: 'Informe um ativo para ser buscado...',
    severity: 'info',
  };

  constructor(private service: ApiFinanceService) {}

  ngOnInit(): void {}

  public possuiDados(): boolean {
    if (this.respostaCandle) {
      return true;
    } else return false;
  }

  public variacaoDia() {
    const precoAtual = this.respostaInformacoes?.lastPrice;
    const precoUltimoFechamento = this.respostaInformacoes?.previousClose;

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
  public classeVariacao(valor: number | undefined) {
    if (valor) {
      if (valor > 0) {
        return true;
      } else return false;
    } else return '';
  }

  public calculaDividendYield12M(resposta: Dividendos) {
    const dados = resposta.data;
    let dataAnterior = new Date();
    dataAnterior.setMonth(dataAnterior.getMonth() - 12);

    const dadosFiltrados = dados.filter((datanum) => {
      return Date.parse(datanum.Date) > dataAnterior.getTime();
    });

    console.log('Dados Filtrados' + JSON.stringify(dadosFiltrados));
    let soma = 0;

    dadosFiltrados.forEach((datanum) => {
      soma += datanum.Dividends;
    });

    return soma / this.respostaInformacoes?.lastPrice!;
  }

  // Calcula a somatoria do semestre e faz uma média para 1 mês
  public calculaDividendYield1M(resposta: Dividendos) {
    const dados = resposta.data;
    let dataAnterior = new Date();
    dataAnterior.setMonth(dataAnterior.getMonth() - 6);

    const dadosFiltrados = dados.filter((datanum) => {
      return Date.parse(datanum.Date) > dataAnterior.getTime();
    });

    console.log('Dados Filtrados' + JSON.stringify(dadosFiltrados));
    let soma = 0;

    dadosFiltrados.forEach((datanum) => {
      soma += datanum.Dividends;
    });

    return soma / this.respostaInformacoes?.lastPrice! / 6;
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

    this.respostaDividendos = this.service.respostaDividendos;
    this.bovespaAnterior =
      this.respostaCotacaoBovespa?.data[
        this.respostaCotacaoBovespa?.data.length - 2
      ];
  }
}
