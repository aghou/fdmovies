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
   * Get TvRepository instance
   * @return {TvRepository}
   */
  getRepository(): TvRepository {
    return this.request.server.tv.repo as TvRepository;
  }
}
