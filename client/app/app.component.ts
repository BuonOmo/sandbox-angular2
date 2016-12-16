import { Component  } from '@angular/core';

@Component({
  selector: 'mon-app',
  template: `
 <h2>A faire</h2>
    <div>
        <span>{{restant()}} of {{todos.length}} remaining</span>
        [ <a (click)="effacer()">archive</a> ]
        <ul>
            <li *ngFor="let todo of todos">
                <input type="checkbox" [(ngModel)]="todo.done" name="done">
                <span [ngClass]="{done: todo.done}">{{todo.text}}</span>
            </li>
        </ul>
        <form>
            <input type="text" [(ngModel)]="text" name="text" size="30" placeholder="ajouter nouvel item ici">
            <input type="submit" value="ajouter" (click)="ajouter()">
        </form>
    </div>
  `,
  styles: [`
    .done { color: #aaaaaa; }
`]
})

export class AppComponent {
  todos: Array<any> = [{'done': false, 'text': 'Apprendre Angular2'}];
  text: string = "";
  
  ajouter() {
    this.todos.push({ done: false, text: this.text});
    this.text = "";
  }
  
  effacer() {
    this.todos = [];
  }
  
  restant(): number {
    return this.todos.filter(e => e.done).length;
  }
}
