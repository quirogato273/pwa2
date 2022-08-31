import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    { id: 1, name: 'Sebastian Moreno', price: 700, category: '', img: 'assets/imgs/aloe.png' },
    { id: 2, name: 'Eduardo Alvarez', price: 500, category: '', img: 'assets/imgs/2.png' },
    { id: 3, name: 'Natalia Florez', price: 700, category: '', img: 'assets/imgs/3.png' },
    { id: 4, name: 'Sebastian Quiroga', price: 700, category: '', img: 'assets/imgs/4.png' },
  ];

  constructor() { }

  getItem(id) {
    const item = this.items.find(x => x.id == id);
    return item;
  }
}
