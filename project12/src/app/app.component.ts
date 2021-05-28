import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyCards } from './dhared/interfaces/cards.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'project11';
  card: MyCards[] = [];


  onAddNote(note: MyCards){
    let id =
    this.card.length > 0
    ? this.card[this.card.length - 1].id +1 : 0;

    this.card.push(note);
  }

  onDeleteCard(index:number) {
    this.card.splice(index, 1);
  }


}
