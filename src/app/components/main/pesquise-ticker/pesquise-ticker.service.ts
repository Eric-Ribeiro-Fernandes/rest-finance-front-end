import { Injectable, SimpleChanges, ViewChild  } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { SetoresTickers } from 'src/app/models/setores-tickers';
import { Informacoes } from 'src/app/models/informacoes';
import { Cotacao } from 'src/app/models/cotacao';
import { PlotlyTemplate } from 'src/app/models/plotly-template';
import { Template } from 'plotly.js-dist-min';
import { OnChanges } from "@angular/core";
import { Subject } from "rxjs";
import { MainComponent } from '../main.component';

@Injectable({
  providedIn: 'root'
})
export class PesquiseTickerService implements OnChanges {
  
 private readonly API = "http://localhost:5000/";

  public ticker = "";
  public respostaInformacoes: Informacoes = {};
  public respostaCotacaoAtivo?: PlotlyTemplate ;
  public respostaCotacaoBovespa: Cotacao = {};

  private subjectName = new Subject<any>();
  
 


  constructor(private http: HttpClient) { 
  }
  ngOnChanges(changes: SimpleChanges): void {



  }

  sendUpdate(message: string) { //the component that wants to update something, calls this fn
    this.subjectName.next({ text: message }); //next() will feed the value in Subject
}

  getTickers():Observable<SetoresTickers>{

    return this.http.get<SetoresTickers>(this.API + "tickers");

  }

  getInfo(tickerASerBuscado:string):Observable<Informacoes>{

    return this.http.get<Informacoes>(this.API + tickerASerBuscado);

  }

  getCotacao(tickerASerBuscado:string):Observable<PlotlyTemplate>{

    return this.http.get<PlotlyTemplate>(this.API + tickerASerBuscado + "/cotacao");

  }

  getCotacaoBovespa():Observable<Cotacao>{

    return this.http.get<Cotacao>(this.API + "/bovespa");

  }

}

  
