import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { MyCards } from 'src/app/dhared/interfaces/cards.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: MyCards[];
  @Output() deleteCard =
  new EventEmitter<number>();
  @Output() getEdit =
  new EventEmitter<number>();
  display: string = "inline-block";
  disactive:string = "none"
   
  onDeleteCard(index:number){
   this.deleteCard.emit(index)
  }
  
  onGetEdit(index:number){
    this.getEdit.emit(index)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
