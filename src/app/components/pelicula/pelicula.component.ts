import { Component, OnInit } from '@angular/core';
//TOMAR DATOS DE LA URL
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas-service.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  regresar:any;

  constructor(public route: ActivatedRoute,
              public _sp: PeliculasService) {

    this.route.params.subscribe( parametros => {

        this.regresar = parametros['pag'];

        this._sp.getIndividualMovie(parametros['id']).subscribe(pelicula => {
          this.pelicula = pelicula;
          console.log(pelicula);

        })


    })

  }

  ngOnInit(): void {
  }

}
