import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
    this.routes.navigate(['dashboard'])
  }

 public goTo(path:String){

    this.routes.navigate([path]);
  }

}
