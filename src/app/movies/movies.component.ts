import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
    selector:'movies',
    templateUrl: 'movies.component.html'
})


export class MoviesComponent{
   title= 'Movie List';
   movies: Movie[] = [] ;
   selectedMovie!: Movie;

   constructor(private movieService:MovieService){}

   ngOnInit(): void{
    //nesne uretilir
    
    this.getMovies();
   // console.log(this.movies);
   }


  onSelect(movie:Movie): void{
    this.selectedMovie = movie;
  }
  getMovies():void{
   this.movieService.getMovies()
    .subscribe(movies=> {
        this.movies=movies;
    });
  }
}



// selector:'.movies'  // <div class="movies"> 
// selector: 'movies' //  <movies></movies>
// selector: '#movies' // <div id="movies">
// bu olusturdugumuz componentten appmodule un haberi olması lazım, app module git.
