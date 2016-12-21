import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

const MAX_LENGTH = 50;

@Component({
  selector: 'mon-app',
  templateUrl: 'app/app.component.html',
  styles: [`
    .rouge { background-color: rgba(255,0,0,0.5); }
    .vert  { background-color: rgba(0,128,0,0.5); }
    textarea { transition: all .4s; }
`]
})

export class AppComponent implements OnInit {
  texteATraduire: string;
  traduction: string;
  longueurMax: number = MAX_LENGTH;
  
  ngOnInit(): void {
    this.texteATraduire = "traduis moi";
  }
  
  constructor(private http: Http) {}
  
  envoyer(): void {
    if (this.texteATraduire.length <= MAX_LENGTH)
      this.http.post('/traduire', { texte: this.texteATraduire }).toPromise().then(data =>
        this.traduction = data.json().texte
      ).catch(error => console.error(error));
  }
  
  effacer() {
    this.texteATraduire = "";
    this.traduction = "";
  }
}
