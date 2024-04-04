import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Creer une Liste D'actions
  actions: Array<any>=[
    {title :"Home", route:"/home", icon : "house"},
    {title :"Products", route:"/products", icon : "search"},
    {title :"New Product", route:"/newProduct", icon : "safe"}
    ];
  // creer variable pour savoir action courante
  currentAction: any;

  setCurrentAction(action: any) {
    this.currentAction=action;
    console.log(this.currentAction);
  }
}

