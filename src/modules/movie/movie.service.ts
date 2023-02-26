import { BaseService } from '../../libs/base.service';
import { MovieRepository } from './movie.repository';

/**
 * MovieService class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export class MovieService extends BaseService {
  /**
   * Get Movies list
   * @return {Promise<Array>}
   */
  getMoviesList(): Promise<Array<any>> {
    return Promise.resolve([]);
  }

  /**
   * Get Movie Item
   * @return {Promise<any>}
   */
  getMovieItem(): Promise<any> {
    return Promise.resolve({});
  }

  /**
   * Get Video trailer
   * @return {Promise<any>}
   */
  getVideoTrailer(): Promise<any> {
    return Promise.resolve({});
  }

  /**
   * Get Top Movies
   * @return {Promise<Array<any>>}
   */
  getTopMoviesList(): Promise<Array<any>> {
    return Promise.resolve([]);
  }

  /**
   * Get Search Movies
   * @return {Promise<Array<any>>}
   */
  getSearch(): Promise<Array<any>> {
    return Promise.resolve([]);
  }

  /**
   * Get MovieRepository instance
   * @return {MovieRepository}
   */
  getRepository(): MovieRepository {
    return this.request.server.user.repo as MovieRepository;
  }
}
