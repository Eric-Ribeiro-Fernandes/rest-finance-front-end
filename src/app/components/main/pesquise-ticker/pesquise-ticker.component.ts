import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Cotacao } from 'src/app/models/cotacao';
import { Informacoes } from 'src/app/models/informacoes';
import { SetoresTickers } from 'src/app/models/setores-tickers';
import { PesquiseTickerService } from './pesquise-ticker.service';


@Component({
  selector: 'app-pesquise-ticker',
  templateUrl: './pesquise-ticker.component.html',
  styleUrls: ['./pesquise-ticker.component.css']
})

export class PesquiseTickerComponent implements OnInit {
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
  public ticker = "";
  public respostaInformacoes: Informacoes = {};
  public respostaCotacaoAtivo: Cotacao = {};
  public respostaCotacaoBovespa: Cotacao = {};
  public isLoading = false;
  
  @Input()
  tickerASerBuscado:string = "";


  constructor(
    private service: PesquiseTickerService) { }

  ngOnInit(): void {

    this.service.getTickers()
      .subscribe({
        next:
          (dados) => {
            this.tickers = dados;
          },
        error:
          (erro: HttpErrorResponse) => {
            alert(erro.message)
          }
      });

  }

  buscarInformacoes(tickerASerBuscado:string){

    this.isLoading=true;


    // Chama o endpoint de informações
    this.service.getInfo(tickerASerBuscado)
    .subscribe( 
      {next:
        (dados)=> {
        this.respostaInformacoes = dados;
        this.isLoading=false;
      }, 
      error:
      (error: HttpErrorResponse) => { 
        alert(error.message +  " Erro na chamada de info");
        this.isLoading=false;
      }});


      // Chama endpoint de cotacao

      this.service.getCotacao(tickerASerBuscado)
      .subscribe (
        {
          next: 
          (dados) => {
            this.respostaCotacaoAtivo = dados;
            this.isLoading = false;
          },
          error: 
          (error: HttpErrorResponse) => {
            alert(error.message +  " Erro na chamada de cotacao");
            this.isLoading=false;
          }
        }
      );

      // Chama endpoint de cotacao

      this.service.getCotacaoBovespa()
      .subscribe (
        {
          next: 
          (dados) => {
            this.respostaCotacaoBovespa = dados;
            this.isLoading = false;
          },
          error: 
          (error: HttpErrorResponse) => {
            alert(error.message +  " Erro na chamada de bovespa");
            this.isLoading=false;
          }
        }
      );

  }

  loading(isLoading:boolean):string{
    if(isLoading){
      return "pi pi-spin pi-spinner";
    } else return "";

  }


  dados():string{
    return JSON.stringify(this.respostaInformacoes) + 
    JSON.stringify(this.respostaCotacaoAtivo.data) + 
    JSON.stringify(this.respostaCotacaoBovespa.data);
  }


}
