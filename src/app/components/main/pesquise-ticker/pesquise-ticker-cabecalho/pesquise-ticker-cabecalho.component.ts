import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { SetoresTickers } from 'src/app/models/setores-tickers';
import { ApiFinanceService } from 'src/app/services/api-finance.service';
import { Router } from '@angular/router';
import { Informacoes } from 'src/app/models/informacoes';
import { PlotlyTemplate } from 'src/app/models/plotly-template';
import { Cotacao } from 'src/app/models/cotacao';
import { Dividendos } from 'src/app/models/dividendos';

@Component({
  selector: 'app-pesquise-ticker-cabecalho',
  templateUrl: './pesquise-ticker-cabecalho.component.html',
  styleUrls: ['./pesquise-ticker-cabecalho.component.css'],
})
export class PesquiseTickerCabecalhoComponent implements OnInit {
  private tickers: SetoresTickers = {
    bensIndustriais: [],
    consumoCiclico: [],
    consumoNaoCiclico: [],
    financeiro: [],
    materiaisBasicos: [],
    outros: [],
    petroleoGaseBiocombustveis: [],
    saude: [],
    tecnologiaDaInformao: [],
    telecomunicacoes: [],
    utilidadePublica: [],
  };

  @Output() respostaInformacoes = new EventEmitter<Informacoes>();
  @Output() respostaCandle = new EventEmitter<PlotlyTemplate>();
  @Output() respostaCotacaoBovespa = new EventEmitter<Cotacao>();
  @Output() respostaCotacaoAtivoDia = new EventEmitter<Cotacao>();
  @Output() respostaDividendos = new EventEmitter<Dividendos>();
  @Output() ticker = new EventEmitter<string>();

  @Input() tickerASerBuscado: string = '';

  public isLoading = false;
  public isBuscaBemSucedida = true;
  constructor(private service: ApiFinanceService) {}

  ngOnInit(): void {
    // Endpoint para verificar conectividade com a api
    this.service.getTickers().subscribe({
      next: (dados) => {
        this.tickers = dados;
      },
      error: (erro: HttpErrorResponse) => {
        alert('API pode estar fora do ar. . . .' + erro.message);
        this.isBuscaBemSucedida = false;
      },
    });
  }

  buscarInformacoes(tickerASerBuscado: string) {
    this.isLoading = true;
    // Chama o endpoint de informações
    this.service.getInfo(tickerASerBuscado).subscribe({
      next: (dados: Informacoes) => {
        this.service.ticker = tickerASerBuscado; // Instancia o ticker na memória
        this.service.respostaInformacoes = dados;
        this.isLoading = false;
        this.ticker.emit(tickerASerBuscado);
        this.respostaInformacoes.emit(dados);
      },
      error: (error: HttpErrorResponse) => {
        alert(
          error.message +
            ' Erro na chamada de informações, confira o ticker digitado...'
        );
        this.isLoading = false;
        this.isBuscaBemSucedida = false;
      },
    });

    // Chama endpoint de cotacao
    this.service.getCotacao(tickerASerBuscado).subscribe({
      next: (dados: PlotlyTemplate) => {
        this.service.respostaCandle = dados;
        this.isLoading = false;
        this.isBuscaBemSucedida = true;

        this.respostaCandle.emit(dados);
      },
      error: (error: HttpErrorResponse) => {
        console.log('Erro na chamada de cotacao', error.message);
        this.isLoading = false;
        this.isBuscaBemSucedida = false;
      },
    });

    // Chama endpoint de cotacao da bovespa
    this.service.getCotacaoBovespa().subscribe({
      next: (dados: Cotacao) => {
        this.service.respostaCotacaoBovespa = dados;
        this.isLoading = false;
        this.isBuscaBemSucedida = true;

        this.respostaCotacaoBovespa.emit(dados);
      },
      error: (error: HttpErrorResponse) => {
        console.log(' Erro na chamada de bovespa', error.message);
        this.isLoading = false;
        this.isBuscaBemSucedida = false;
      },
    });

    // Chama endpoint de cotacao do dia
    this.service.getCotacaoDia(tickerASerBuscado).subscribe({
      next: (dados: Cotacao) => {
        this.service.respostaCotacaoAtivoDia = dados;
        this.isLoading = false;
        this.isBuscaBemSucedida = true;

        this.respostaCotacaoAtivoDia.emit(dados);
      },
      error: (error: HttpErrorResponse) => {
        console.log(' Erro na chamada de cotação do dia', error.message);
        this.isLoading = false;
        this.isBuscaBemSucedida = false;
      },
    });

    // Chama endpoint de dividendos
    this.service.getDividendos(tickerASerBuscado).subscribe({
      next: (dados: Dividendos) => {
        this.service.respostaDividendos = dados;
        this.isLoading = false;
        this.isBuscaBemSucedida = true;
        this.respostaDividendos.emit(dados);
      },
      error: (error: HttpErrorResponse) => {
        console.log(' Erro na chamada de dividendos do dia', error.message);
        this.isLoading = false;
        this.isBuscaBemSucedida = false;
      },
    });
  }

  loading(isLoading: boolean): string {
    if (isLoading) {
      return 'pi pi-spin pi-spinner me-2';
    } else return 'pi pi-search me-2';
  }
}
