import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BaseService } from './base.service';
import { getPagination } from './pagination.helper';
import { TheMovieDbRepository } from './themoviedb.repository';

/**
 * TheMovieDbService class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export abstract class TheMovieDbService extends BaseService {
  public resource = '';

  /**
   * Get resource list
   * @return {Promise<Array<any>>}
   */
  async getList(): Promise<Array<any>> {
    const pagination = getPagination((this.request.query as any).page || 1);
    const config = {
      params: {
        page: pagination.remotePage,
      },
      responseType: 'json',
    } as AxiosRequestConfig;

    return await this.getHttpClient()
      .get(`discover/${this.resource}`, config)
      .then((response) => response.data.results.slice(pagination.segStart, pagination.segEnd));
  }

  /**
   * Get resource Item
   * @return {Promise<string>}
   */
  async getItem(): Promise<string> {
    this.reply.headers({ 'Content-Type': 'application/json' });
    return this.getHttpClient()
      .get(`${this.resource}/${(this.request.params as any).id}`)
      .then((response) => response.data);
  }

  /**
   * Get Videos
   * @return {Promise<string>}
   */
  async getVideoTrailer(): Promise<any> {
    this.reply.headers({ 'Content-Type': 'application/json' });
    return this.getHttpClient()
      .get(`${this.resource}/${(this.request.params as any).id}/videos`)
      .then((response) => response.data);
  }

  /**
   * Get Top rated
   * @return {Promise<Array<any>>}
   */
  async getTopList(): Promise<Array<any>> {
    const config = { responseType: 'json' } as AxiosRequestConfig;
    return this.getHttpClient()
      .get(`${this.resource}/top_rated`, config)
      .then((response) => response.data.results.slice(0, 4));
  }

  /**
   * Search
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
      .get(`search/${this.resource}`, config)
      .then((response) => response.data.results);
  }

  /**
   * Get resource favorite list
   * @return {Promise<any>}
   */
  async getFavoritesList(): Promise<any> {
    return this.getRepository().getFavorites();
  }

  /**
   * Add item to favorite
   */
  addToFavorites() {
    if (!this.getRepository().addFavorites()) {
      return this.reply.internalServerError();
    }
    this.reply.code(201);
  }

  /**
   * Remove item from favorite
   */
  removeFromFavorites() {
    if (!this.getRepository().removeFavorites()) {
      return this.reply.internalServerError();
    }
  }

  /**
   * Get themoviedb http cli
   * @return {AxiosInstance}
   */
  getHttpClient(): AxiosInstance {
    return this.request.server.themoviedb;
  }

  /**
   * Get resource Repository instance
   * @return {TheMovieDbRepository}
   */
  getRepository(): TheMovieDbRepository {
    return (this.request.server as any)[this.resource].repo as TheMovieDbRepository;
  }
}
