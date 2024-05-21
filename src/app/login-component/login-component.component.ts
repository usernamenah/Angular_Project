

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {




  isloading: number = 0;
  percentagecount: number = 0;
  percentagecountstop: any = setInterval(() => {
    this.percentagecount++;
    if (this.percentagecount > 100) {
      clearInterval(this.percentagecountstop);
      this.isloading++;
    }
  },60)
// 


}




