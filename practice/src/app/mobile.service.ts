import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor() { }

  mobiles=[
    {
      mobile:'vivo',
      price:20000,
      RAM:4,
      storage:32
    },
    {
      mobile:'moto',
      price:50000,
      RAM:8,
      storage:64
    },
    {
      mobile:'oppo',
      price:50000,
      RAM:4,
      storage:16
    },
    {
      mobile:'realme',
      price:25000,
      RAM:8,
      storage:32
    },
    {
      mobile:'samsung',
      price:60000,
      RAM:8,
      storage:128
    }
  ];

  getmobiles(){
    this.mobiles
  }


}
