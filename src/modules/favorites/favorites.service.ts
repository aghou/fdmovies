import { BaseService } from '../../libs/base.service';
import { FavoritesRepository } from './favorites.repository';

/**
 * FavoritesService class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export class FavoritesService extends BaseService {
  /**
   * Get Favorites list
   * @return {Promise<Array>}
   */
  getFavoritesList(): Promise<Array<any>> {
    return Promise.resolve([]);
  }

  /**
   * Add item to favorite
   */
  addToFavorites(): Promise<boolean> {
    return Promise.resolve(true);
  }

  /**
   * Remove item from favorite
   */
  removeFromFavorites(): Promise<boolean> {
    return Promise.resolve(true);
  }

  /**
   * Get FavoritesRepository instance
   * @return {FavoritesRepository}
   */
  getRepository(): FavoritesRepository {
    return this.request.server.favorites.repo as FavoritesRepository;
  }
}
