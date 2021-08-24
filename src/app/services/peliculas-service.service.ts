import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { formatDate } from "@angular/common";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  //VARIABLES
  private apiKey = "42e5571474b1132632d298be9aadc6d4";
  private urlMoviedb = "https://api.themoviedb.org/3";
  private token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmU1NTcxNDc0YjExMzI2MzJkMjk4YmU5YWFkYzZkNCIsInN1YiI6IjYxMTMzNTgyNzcwNzAwMDA1ZGU2OTM0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nbt0cGBlqrrOsTba6X5AU8yabByr_Y9-uT92O8nmLMY";

  anno = new Date();
  year = this.anno.getFullYear();

  busquedaPeliculas:any;
  busquedaJson:any;

  constructor( private jsonp: JsonpClientBackend, private http: HttpClient) {
    this.getPopulares();
   }

  getPopulares(){

    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, 'JSONP_CALLBACK')



  }

  getBuscarPelicula(texto:string){


    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, 'JSONP_CALLBACK')/*.pipe(map(res => {
      //this.busquedaPeliculas = JSON.parse(JSON.stringify(res)).data;
      //console.log(this.busquedaPeliculas);

    }))*/
  }

  getCartelera(){

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    //FORMATO DE FECHA
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    const formattedDateDesde = formatDate(desde, format, locale);
    const formattedDateHasta = formatDate(hasta.setDate(hasta.getDate() + 7), format, locale);

    console.log(formattedDateDesde);
    console.log(formattedDateHasta);



    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${formattedDateDesde}&primary_release_date.lte=${formattedDateHasta}&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, 'JSON_CALLBACK')
  }

  getRatedMovies(){

    let url = `${this.urlMoviedb}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, 'JSONP_CALLBACK')
  }

  getMovieYear(){
    let url = `${this.urlMoviedb}/discover/movie?primary_release_year=${this.year}&sort_by=vote_average.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`
    return this.http.jsonp(url,'JSON_CALLBACK')
  }

  getDramaMovies(){

    let url = `${this.urlMoviedb}/discover/movie?with_genres=18&primary_release_year=${this.year}&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`
     return this.http.jsonp(url,'JSON_CALLBACK')
  }

  getIndividualMovie(id: string){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`
    return this.http.jsonp(url,'JSON_CALLBACK')
  }
}
