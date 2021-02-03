import { Injectable } from '@angular/core';
import {Contact} from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  contacts: Contact[];

  constructor() {
     this.contacts = [];
  }

  getContacts() {
    if (localStorage.getItem('contactos') === null) {
      this.contacts = [];
    } else {
     this.contacts = JSON.parse(localStorage.getItem('contactos'));
     return this.contacts;
    }
  }

  countContacts(): number{
    return this.getContacts().length;
  }

  // countHbd(): number {
  //   return this.getContacts().filter(contact => contact.isDay()).length;
  // }

  addContacts(contacto: Contact): void {
    let contactos: Contact[] = [];
    if (localStorage.getItem('contactos') === null) {
      contactos.push(contacto);
      localStorage.setItem('contactos', JSON.stringify(contactos));
    } else {
      contactos = JSON.parse(localStorage.getItem('contactos'));
      contactos.push(contacto);
      localStorage.setItem('contactos', JSON.stringify(contactos));
    }
  }

  deleteContacts(contacto: Contact): void {
    for (let i = 0; i < this.contacts.length; i ++) {
      if (contacto === this.contacts[i]) {
        this.contacts.splice(i, 1);
        localStorage.setItem('contactos', JSON.stringify(this.contacts));
      }
    }
  }

  updateContacts(contacto: Contact, id: number): any {
    const contact  = {
      ...contacto
    };
    contact.id = id;
    localStorage.setItem('contacts', JSON.stringify(contacto));
  }


}
