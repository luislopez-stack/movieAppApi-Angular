import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-marco',
  templateUrl: './marco.component.html',
  styles: [
  ]
})
export class MarcoComponent implements OnInit {

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;


  cartelera:any;

  constructor() {
    //this.peliculas;
   }

  ngOnInit(): void {
  }

}
