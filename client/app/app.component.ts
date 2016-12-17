import {Component, OnInit} from '@angular/core';
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
  longueurMax: number = MAX_LENGTH;
  
  ngOnInit(): void {
    this.texteATraduire = "traduis moi";
  }
}
