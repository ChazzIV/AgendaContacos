import { Component, OnInit } from '@angular/core';
import {ContactoService} from '@app/services/contacto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total: number;
  hbd: boolean;


  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
      this.total = this.contactoService.countContacts();
      // this.hbd = this.contactoService.countHbd();
  }

}
