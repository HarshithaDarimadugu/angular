import { Component } from '@angular/core';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  constructor(private ms:MobileService){

  }
  mob=this.ms.mobiles;

  deletemobile(){
   this.ms.mobiles.pop()
      
    }
    
  }


