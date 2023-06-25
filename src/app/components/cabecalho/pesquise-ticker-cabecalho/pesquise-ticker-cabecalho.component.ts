import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SetoresTickers } from 'src/app/models/setores-tickers';
import { ApiFinanceService } from 'src/app/services/api-finance.service';
import { Router } from '@angular/router';

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

  public isLoading = false;
  public isBuscaBemSucedida = true;

  @Input()
  tickerASerBuscado: string = '';

  constructor(private service: ApiFinanceService, private routes: Router) {}

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
      next: (dados) => {
        this.service.ticker = tickerASerBuscado; // Instancia o ticker na memória
        this.service.respostaInformacoes = dados;
        this.isLoading = false;
        console.log(
          'Resposta info: ',
          JSON.stringify(this.service.respostaInformacoes)
        );
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
      next: (dados) => {
        this.service.respostaCandle = dados;
        this.isLoading = false;
        // console.log("Resposta cotacao ativo: ", JSON.stringify(this.service.respostaCotacaoAtivo));
        this.isBuscaBemSucedida = true;
      },
      error: (error: HttpErrorResponse) => {
        console.log('Erro na chamada de cotacao', error.message);
        this.isLoading = false;
        this.isBuscaBemSucedida = false;
      },
    });

    // Chama endpoint de cotacao da bovespa
    this.service.getCotacaoBovespa().subscribe({
      next: (dados) => {
        this.service.respostaCotacaoBovespa = dados;
        this.isLoading = false;
        // console.log("Resposta cotacao bovespa: ", JSON.stringify(this.service.respostaCotacaoBovespa));
        this.isBuscaBemSucedida = true;
      },
      error: (error: HttpErrorResponse) => {
        console.log(' Erro na chamada de bovespa', error.message);
        this.isLoading = false;
        this.isBuscaBemSucedida = false;
      },
    });

    // Chama endpoint de cotacao do dia
    this.service.getCotacaoDia(tickerASerBuscado).subscribe({
      next: (dados) => {
        this.service.respostaCotacaoAtivoDia = dados;
        this.isLoading = false;
        this.isBuscaBemSucedida = true;
      },
      error: (error: HttpErrorResponse) => {
        console.log(' Erro na chamada de cotação do dia', error.message);
        this.isLoading = false;
        this.isBuscaBemSucedida = false;
      },
    });
  }

  loading(isLoading: boolean): string {
    if (isLoading) {
      return 'pi pi-spin pi-spinner';
    } else return '';
  }
}
