import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs'; 
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService: LoggingService) { }

  getMovies(): Observable <Movie[]> {
    this.loggingService.add('MovieService: listing movies');
    return of(Movies); // datasource icerisinde hazırlamıs oldugumuz listeyi geri dondurur
  }
}

// return movies dedigimiz de zaten movie de bize datasource icerisinden bir liste olarak geliyor.
// movies i observable a ceviriyoruz -> of(Movies)