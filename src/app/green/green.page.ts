import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-green',
  templateUrl: './green.page.html',
  styleUrls: ['./green.page.scss'],
})
export class GreenPage implements OnInit {

  CodePush;
  counter;
  init;
  last;

  constructor(private router: Router,private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.counter = 15;
    this.init = 15;
    this.startCountdown(); 
  }


  // Реализация таймера , не стал подключать библиотеку, написал сам.
  startCountdown(){
    if(this.init && this.init > 0){
      this.counter = this.init;
      this.interval();
    }
  }

  interval(){
    setTimeout(()=>{
      this.counter = this.counter -1;
      this.processCountDown();
    }, 1000)
  }  

  processCountDown(){

    if(this.counter == 0 || this.counter <= 0){
      console.log("Конец");
      this.CodePush = false;

      let navigationExtras = {
      queryParams:{
          last:'green'
        }
      }
      this.router.navigate(['/yellow'],navigationExtras);
    }else{
      this.interval();
      this.CodePush = true;
    }
  }

}
