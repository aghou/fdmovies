import { TheMovieDbRepository } from '../../libs/themoviedb.repository';

/**
 * MovieRepository class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export class MovieRepository extends TheMovieDbRepository {
  resource = 'movie';
}
