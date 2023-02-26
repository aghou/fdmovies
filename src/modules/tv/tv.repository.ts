import { TheMovieDbRepository } from '../../libs/themoviedb.repository';

/**
 * TvRepository class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export class TvRepository extends TheMovieDbRepository {
  resource = 'tv';
}
