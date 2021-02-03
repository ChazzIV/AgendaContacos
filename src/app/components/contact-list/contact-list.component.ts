import { Component, OnInit } from '@angular/core';
import {ContactoService} from '@app/services/contacto.service';
import {Contact} from '@app/models/Contact';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contact: Contact[];
  constructor(public contactoServices: ContactoService) { }


  ngOnInit(): void {
    this.contact =  this.contactoServices.getContacts();
  }


  deleteContact(contacts: Contact): void {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ contacts.name}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if (resp.value ) {
        Swal.fire({
          text: 'Se elimino correctamente',
          icon: 'success'
        });
        this.contactoServices.deleteContacts(contacts);
      }
    });

  }
}
