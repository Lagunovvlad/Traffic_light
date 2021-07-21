import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.page.html',
  styleUrls: ['./yellow.page.scss'],
})
export class YellowPage implements OnInit {

  CodePush;
  counter;
  init;
  last;

  constructor(private router: Router,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params=>
    {
      if(params&&params.last){
        this.last=params.last;
      }else{
        this.last='green';
      }
    });
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.counter = 3;
    this.init = 3;
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
          last:'yellow'
        }
      }
      if(this.last == 'green'){
        this.router.navigate(['/red']);
      }else if(this.last == 'red'){
        this.router.navigate(['/green']);
      }
      
    }else{
      this.interval();
      this.CodePush = true;
    }
  }

}
