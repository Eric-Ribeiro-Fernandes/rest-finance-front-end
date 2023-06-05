import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SetoresTickers } from 'src/app/models/setores-tickers';
import { Informacoes } from 'src/app/models/informacoes';
import { Cotacao } from 'src/app/models/cotacao';

@Injectable({
  providedIn: 'root'
})
export class PesquiseTickerService {
  
 private readonly API = "http://localhost:5000/";

  constructor(private http: HttpClient) { 
  }

  getTickers():Observable<SetoresTickers>{

    return this.http.get<SetoresTickers>(this.API + "tickers");

  }

  getInfo(tickerASerBuscado:string):Observable<Informacoes>{

    return this.http.get<Informacoes>(this.API + tickerASerBuscado);

  }

  getCotacao(tickerASerBuscado:string):Observable<Cotacao>{

    return this.http.get<Cotacao>(this.API + tickerASerBuscado + "/cotacao");

  }
}

  
