import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-attribute-app';
  showColor: any = false;
  changeColor():void{
    this.showColor = !this.showColor;
  }
}
