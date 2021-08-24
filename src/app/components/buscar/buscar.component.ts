import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas-service.service';
//TOMAR DATOS DE LA URL
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  buscar:string = ""
  data:any;
  results="";
  constructor(public _ps: PeliculasService,
              public route: ActivatedRoute) {
                this.route.params.subscribe( parametros => {
                  if (parametros['texto']) {
                    this.buscar = parametros['texto'];
                    this.buscarPelicula();
                  }

                })
              }

  ngOnInit(): void {
  }

  buscarPelicula(){
    if(this.buscar.length == 0){
      return;
    }

    this._ps.getBuscarPelicula(this.buscar).subscribe(data => {
      this.data = data.results;
      const variable = this.data[2].original_title;
      console.log(this.data);

    })
  }




}
