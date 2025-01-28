import { Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  private movies: Movie[] = [
    { id: 1, title: 'Inception', year: 2010 },
    { id: 2, title: 'The Shawshank Redemption', year: 2011 },
    { id: 3, title: 'Pulp Fiction', year: 2012 },
    { id: 4, title: 'Forrest Gump', year: 2013 },
    { id: 5, title: 'The Dark Knight', year: 2014 },
  ]

  getMovieSignal = signal(this.movies);

  getMovies(): Observable<Movie[]> {
    // simulating an HTTP request
    return of(this.movies);
  }
}
