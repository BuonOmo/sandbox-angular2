import {Component} from '@angular/core';

const RECETTES = [
  { nom: "paupiette 0",  src: "//unsplash.it/200"},
  { nom: "paupiette 1",  src: "//unsplash.it/201"},
  { nom: "paupiette 2",  src: "//unsplash.it/202"},
  { nom: "paupiette 3",  src: "//unsplash.it/203"},
  { nom: "paupiette 4",  src: "//unsplash.it/204"},
  { nom: "paupiette 5",  src: "//unsplash.it/205"},
  { nom: "paupiette 6",  src: "//unsplash.it/206"},
  { nom: "paupiette 7",  src: "//unsplash.it/207"},
  { nom: "paupiette 8",  src: "//unsplash.it/208"},
  { nom: "paupiette 9",  src: "//unsplash.it/209"},
  { nom: "paupiette 10", src: "//unsplash.it/208"},
  { nom: "paupiette 11", src: "//unsplash.it/201"},
];


@Component({
  selector: 'mon-app',
  template: `
    <h1>Mes recettes</h1>
    <div *ngFor="let recette of recettes | slice:((page-1) * itemsPerPage):(page * itemsPerPage)"><img [src]="recette.src"></div>
    <button (click)="prev()">prev</button>
    <button (click)="next()">next</button>
  `
})
export class AppComponent {
  recettes: Array<any> = RECETTES.map((e,i) => Object.assign(e,{id: i}));
  page: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = Math.ceil(this.recettes.length / this.itemsPerPage);
  
  next(): void {
    ++this.page;
  }
  
  prev(): void {
    --this.page;
  }
}
