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
  
  editText : string = "";
  editName : string = "";
  editIndex :number;
  editActive :boolean = false;
   
  onDeleteCard(index:number){
   this.deleteCard.emit(index)
  }
  
  getEdit(index:number){
   this.editActive = true;
   this.editName = this.card[index].name;
   this.editText = this.card[index].inputText;
   this.editIndex = index;

  }
  setEdit(){
    this.card[this.editIndex].name = this.editName;
    this.card[this.editIndex].inputText = this.editText;
    this.card[this.editIndex].date = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
    this.editActive = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
