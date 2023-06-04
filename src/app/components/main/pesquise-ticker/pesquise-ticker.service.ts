import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SetoresTickers } from 'src/app/models/setores-tickers';

@Injectable({
  providedIn: 'root'
})
export class PesquiseTickerService {
  
 private readonly API = "http://localhost:5000"

  constructor(private http: HttpClient) { 
  }

  getTickers():Observable<SetoresTickers>{

    return this.http.get<SetoresTickers>(this.API + "/tickers")

  }

  getInfo(ticker:string){

    

  }
}

