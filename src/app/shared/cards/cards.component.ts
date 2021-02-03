import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  constructor() { }
  @Input('titulo') titulo;
  @Input('contador') contador;
  @Input('icons') icons;

  ngOnInit(): void {

  }

}
