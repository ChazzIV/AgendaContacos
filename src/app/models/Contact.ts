export class Contact {
  id: number;
  name: string;
  phone: string;
  address: string;
  hbd?: Date;

  constructor() {
  }
  //
  // public isDay(): void  {
  //   const bd = new Date(this.hbd).getMonth() === new Date().getMonth() && new Date(this.hbd).getDate() === new Date().getDate();
  //
  // }

}
