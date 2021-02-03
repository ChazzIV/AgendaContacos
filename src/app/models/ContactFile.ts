import {Contact} from './Contact';

export class ContactFile implements  Contact {
    constructor(
      public id,
      public name,
      public address,
      public phone,
      public hbd
    ) {}

  public static createInstance(data: any): ContactFile
  {
    const {
      id,
      name,
      address,
      phone,
      hbd
    } = data;

    return new ContactFile(
      id,
      name,
      address,
      phone,
      hbd
    );
  }
  public esCumple(): boolean
  {
    const hoy = new Date();

    return new Date(this.hbd).getMonth() === hoy.getMonth() && new Date(this.hbd).getDate() === hoy.getDate();
  }
}
