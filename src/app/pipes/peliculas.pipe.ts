import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculas'
})
export class PeliculasPipe implements PipeTransform {

  transform(pelicula: any, poster:boolean = false): any {

    let url = "http://image.tmdb.org/t/p/w500/";

    if (poster) {
      return url + pelicula.poster_path;
    }
    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    }
    if (pelicula.poster_path) {
      return url + pelicula.poster_path;
    }
    return null;
  }

}
