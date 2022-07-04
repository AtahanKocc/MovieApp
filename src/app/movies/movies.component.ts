import { Component } from "@angular/core";
import { Movies } from "../movie.datasource";
@Component({
    selector:'movies',
    templateUrl: 'movies.Component.html'
})


export class MoviesComponent{
  title= 'Movie List';
  movies= Movies;
}



// selector:'.movies'  // <div class="movies"> 
// selector: 'movies' //  <movies></movies>
// selector: '#movies' // <div id="movies">
// bu olusturdugumuz componentten appmodule un haberi olması lazım, app module git.
