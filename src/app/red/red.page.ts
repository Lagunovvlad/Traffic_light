import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-red',
  templateUrl: './red.page.html',
  styleUrls: ['./red.page.scss'],
})
export class RedPage implements OnInit {

  CodePush;
  counter;
  init;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.counter = 10;
    this.init = 10;
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
          last:'red'
        }
      }
      this.router.navigate(['/yellow'],navigationExtras); // Переход на страницу
    }else{
      this.interval();
      this.CodePush = true;
    }
  }

}
