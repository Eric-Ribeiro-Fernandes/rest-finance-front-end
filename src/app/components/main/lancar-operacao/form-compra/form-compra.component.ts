import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css'],
})
export class FormCompraComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      data: [''],
      ticker: [''],
      precoPago: [''],
      quantidade: [''],
      totalCompra: [''],
    });
  }
}
