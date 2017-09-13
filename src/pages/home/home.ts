import { Component , ViewChild } from '@angular/core';
import { NavController , AlertController , Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    items = [];

    params: Object;
    pushPage: any;

    @ViewChild(Slides) slides: Slides;

    constructor(
      public navCtrl: NavController,
      public alertCtrl: AlertController
    ) {
      for (let i = 0; i < 30; i++) {
        this.items.push( 'this is item ' + this.items.length );
      }
    }

    pushEvent(i){
      this.params = { id: i };
    }

    doInfinite(infiniteScroll) {
     console.log('Begin async operation');

     setTimeout(() => {
       for (let i = 0; i < 10; i++) {
         this.items.push( 'this is item ' + this.items.length );
       }

       console.log('Async operation has ended');
       infiniteScroll.complete();
     }, 500);
    }

    slideChanged() {
      let currentIndex = this.slides.getActiveIndex();
      console.log('Current index is', currentIndex);
    }
}
