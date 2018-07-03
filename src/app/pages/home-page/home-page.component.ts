import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  outraFrase: string ='Outra frase qualquer';
  constructor() { }

  ngOnInit() {
  }

}
