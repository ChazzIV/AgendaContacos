import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {ContactoService} from '@app/services/contacto.service';
import { Router} from '@angular/router';
import {Contact} from '@app/models/Contact';
import {FormBuilder , FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup;

  contact: Contact = {
    id: null,
    name: null,
    phone: null,
    address: null,
    hbd: null
  };

  constructor(public contactoServices: ContactoService,
              private router: Router,
              public fb: FormBuilder) {

    this.myForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      hbd: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  addContact(): void {
    this.contactoServices.addContacts(this.contact);
    Swal.fire({
      text: 'Se agrego correctamente',
      icon: 'success'
    });
    this.router.navigateByUrl('/contactList');
  }
}
