import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Compra } from 'src/app/models/api-lancar-operacao';
import { ApiFinanceService } from 'src/app/services/api-finance.service';
import { ApiLancarOperacaoService } from 'src/app/services/api-lancar-operacao.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css'],
})
export class FormCompraComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private service: ApiLancarOperacaoService
  ) {}

  data = '';
  ticker = '';
  precoPago = 0;
  quantidade = 1;
  totalCompra = 0;
  form!: FormGroup;

  ngOnInit(): void {
    // Criação do formulário
    this.form = this.formBuilder.group({
      data: [this.data, Validators.compose([Validators.required])],
      ticker: [
        this.ticker,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          ,
          Validators.maxLength(6),
        ]),
      ],
      precoPago: [this.precoPago, Validators.required],
      quantidade: [this.quantidade, Validators.required],
      totalCompra: [this.totalCompra],
    });

    this.form.controls['totalCompra'].disable();

    // Campos reativos
    this.form.controls['precoPago'].valueChanges.subscribe((valor) => {
      const qtd = this.form.get('quantidade')?.value;

      this.totalCompra = valor * qtd;

      this.form.controls['totalCompra'].setValue(this.totalCompra);
    });

    this.form.controls['quantidade'].valueChanges.subscribe((valor) => {
      const preco = this.form.get('precoPago')?.value;

      this.totalCompra = valor * preco;

      this.form.controls['totalCompra'].setValue(this.totalCompra);
    });
  }

  tratamentoForm(): Compra {
    this.form.controls['ticker'].setValue(
      this.form.controls['ticker'].value.toLocaleUpperCase()
    );

    let dados: Compra = this.form.value;
    dados.id = uuid.v4();

    return dados;
  }

  onSubmit() {
    const dados = this.tratamentoForm();

    this.service.registrarCompra(dados).subscribe({
      next: () => {
        alert('Compra registrada');
        this.form.reset();
        this.ngOnInit();
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
