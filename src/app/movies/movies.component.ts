import { Component } from "@angular/core";
import { Movies } from "../movie.datasource";
import { Movie } from "../movie";


@Component({
    selector:'movies',
    templateUrl: 'movies.Component.html'
})


export class MoviesComponent{
  title= 'Movie List';
  movies= Movies;
  selectedMovie!: Movie;

  onSelect(movie:Movie): void{
    this.selectedMovie = movie;
  }
}



// selector:'.movies'  // <div class="movies"> 
// selector: 'movies' //  <movies></movies>
// selector: '#movies' // <div id="movies">
// bu olusturdugumuz componentten appmodule un haberi olması lazım, app module git.
