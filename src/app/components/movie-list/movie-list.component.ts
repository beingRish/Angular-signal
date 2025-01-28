import { Component, computed, effect, EventEmitter, inject, input, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'

  // implements OnInit, OnChanges
})
export class MovieListComponent {
  // @Output() onMovieClick = new EventEmitter<Movie>();
  onMovieClick = output<Movie>({
    alias: 'movieClick'
  });

  // @Input() searchTerm!: string;
  searchTerm = input.required({
    transform: (value: string) => value.toLowerCase(),
    alias: 'searchInput'
  })
  // movies: Movie[] = [];
  // filteredMovies: Movie[] = [];

  movieService = inject(MovieService);
  
  filteredMoviesSignal = computed(() => this.movieService.getMovieSignal()
    .filter(movie => movie.title.toLowerCase().includes(this.searchTerm())))

  constructor() {
  }
  
  public handleMovieClick(movie: Movie): void {
    this.onMovieClick.emit(movie);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['searchTerm'].currentValue) {
  //     this.filteredMovies = this.movies.filter(movie => {
  //       return movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
  //     });
  //   }
  // }

  // ngOnInit(): void {
  //   this.movieService.getMovies().subscribe(movies => {
  //     this.movies = movies;
  //     this.filteredMovies = movies;
  //   })
  // }

}
