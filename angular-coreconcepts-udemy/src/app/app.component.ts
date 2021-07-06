import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-coreconcepts-udemy';
  data = {
    title : 'angular-coreconcepts-udemy'
  };

  onKeyUp(title: any): void{
   this.data.title = title;
  }
}
