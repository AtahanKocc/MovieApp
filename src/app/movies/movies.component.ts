import { Component } from "@angular/core";
import { Movies } from "../movie.datasource";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
    selector:'movies',
    templateUrl: 'movies.Component.html'
})


export class MoviesComponent{
  title= 'Movie List';
  movies: Movie[];
  selectedMovie!: Movie;

   constructor(private movieService:MovieService){}

   ngInit(): void{
    //nesne uretilir
    this.getMovies();
   }

  onSelect(movie:Movie): void{
    this.selectedMovie = movie;
  }
  getMovies():void{
    this.movies=this.movieService.getMovies();
  }
}



// selector:'.movies'  // <div class="movies"> 
// selector: 'movies' //  <movies></movies>
// selector: '#movies' // <div id="movies">
// bu olusturdugumuz componentten appmodule un haberi olması lazım, app module git.
