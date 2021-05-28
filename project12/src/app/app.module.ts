import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddFormComponent } from './ui/add-form/add-form.component';
import { CardComponent } from './ui/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
