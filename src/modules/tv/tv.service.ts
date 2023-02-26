import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BaseService } from '../../libs/base.service';
import { TvRepository } from './tv.repository';

/**
 * TvService class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export class TvService extends BaseService {
  /**
   * Get Tv list
   * @return {Promise<Array>}
   */
  getTvList(): Promise<Array<any>> {
    return Promise.resolve([]);
  }

  /**
   * Get Tv Item
   * @return {Promise<any>}
   */
  getTvItem(): Promise<any> {
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
   * Get Top Tv
   * @return {Promise<Array<any>>}
   */
  getTopTvList(): Promise<Array<any>> {
    return Promise.resolve([]);
  }

  /**
   * Get Search Tv
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
      .get(`search/tv`, config)
      .then((response) => response.data.results);
  }

  /**
   * Get TvRepository instance
   * @return {TvRepository}
   */
  getRepository(): TvRepository {
    return this.request.server.tv.repo as TvRepository;
  }

  /**
   * Get themoviedb http cli
   * @return {AxiosInstance}
   */
  getHttpClient(): AxiosInstance {
    return this.request.server.themoviedb;
  }
}
