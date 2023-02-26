import { TheMovieDbService } from '../../libs/themoviedb.service';

/**
 * MovieService class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export class MovieService extends TheMovieDbService {
  resource = 'movie';
}
