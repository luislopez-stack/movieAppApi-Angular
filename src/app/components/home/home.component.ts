import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  ranquin:any;
  movieYear:any;
  dramaMovie:any;

  constructor(public _ps: PeliculasService) {

    this._ps.getCartelera().subscribe(data => {
      this.cartelera = data;
      console.log(data);

    })


    this._ps.getPopulares().subscribe(data => {
      this.populares=data;
      console.log(data);
    })

    this._ps.getRatedMovies().subscribe(data => {
      this.ranquin = data;
      console.log(data);
    })

    this._ps.getMovieYear().subscribe(data => {
      this.movieYear = data;
      console.log(data);
    })

    this._ps.getDramaMovies().subscribe(data => {
      this.dramaMovie=data;
    })
   }

  ngOnInit(): void {
  }

}
