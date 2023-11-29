import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../models/api-lancar-operacao';

@Injectable({
  providedIn: 'root',
})
export class ApiLancarOperacaoService {
  constructor(private http: HttpClient) {}

  private readonly API = 'http://localhost:3000';

  registrarCompra(body: Compra) {
    return this.http.post<Compra>(this.API + '/historicoCompras', body);
  }

  listarCompras() {
    return this.http.get<Compra[]>(this.API + '/historicoCompras');
  }
}
