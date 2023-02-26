import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BaseService } from '../../libs/base.service';
import { getPagination } from '../../libs/pagination.helper';
import { MovieRepository } from './movie.repository';

/**
 * MovieService class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export class MovieService extends BaseService {
  /**
   * Get Movies list
   * @return {Promise<Array<any>>}
   */
  async getMoviesList(): Promise<Array<any>> {
    const pagination = getPagination((this.request.query as any).page || 1);
    const config = {
      params: {
        page: pagination.remotePage,
      },
      responseType: 'json',
    } as AxiosRequestConfig;

    return await this.getHttpClient()
      .get('discover/movie', config)
      .then((response) => response.data.results.slice(pagination.segStart, pagination.segEnd));
  }

  /**
   * Get Movie Item
   * @return {Promise<string>}
   */
  async getMovieItem(): Promise<string> {
    this.reply.headers({ 'Content-Type': 'application/json' });
    return this.getHttpClient()
      .get(`movie/${(this.request.params as any).id}`)
      .then((response) => response.data);
  }

  /**
   * Get Video trailer
   * @return {Promise<string>}
   */
  async getVideoTrailer(): Promise<any> {
    this.reply.headers({ 'Content-Type': 'application/json' });
    return this.getHttpClient()
      .get(`movie/${(this.request.params as any).id}/videos`)
      .then((response) => response.data);
  }

  /**
   * Get Top Movies
   * @return {Promise<Array<any>>}
   */
  async getTopMoviesList(): Promise<Array<any>> {
    const config = { responseType: 'json' } as AxiosRequestConfig;
    return this.getHttpClient()
      .get(`movie/top_rated`, config)
      .then((response) => response.data.results.slice(0, 4));
  }

  /**
   * Get Search Movies
   * @return {Promise<Array<any>>}
   */
  async getSearch(): Promise<Array<any>> {
    const config = {
      params: {
        page: (this.request.query as any).page || 1,
        query: (this.request.query as any).query,
      },
      responseType: 'json',
    } as AxiosRequestConfig;
    return this.getHttpClient()
      .get(`search/movie`, config)
      .then((response) => response.data.results);
  }

  /**
   * Get MovieRepository instance
   * @return {MovieRepository}
   */
  getRepository(): MovieRepository {
    return this.request.server.user.repo as MovieRepository;
  }

  /**
   * Get themoviedb http cli
   * @return {AxiosInstance}
   */
  getHttpClient(): AxiosInstance {
    return this.request.server.themoviedb;
  }
}
