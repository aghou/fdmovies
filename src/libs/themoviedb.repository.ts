import { ObjectId } from 'mongodb';
import { BaseRepository } from './base.repository';

/**
 * TheMovieDbRepository class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export abstract class TheMovieDbRepository extends BaseRepository {
  public resource = '';

  async getFavorites(): Promise<any> {
    const page = (this.request.query as any).page || 1;
    const skip = page > 0 ? (page - 1) * 10 : 0;
    return this.db
      ?.collection('favorites')
      .find({
        resource: this.resource,
        userId: new ObjectId(this.request.identity.sub),
      })
      .skip(skip)
      .limit(10)
      .toArray();
  }

  async addFavorites(): Promise<any> {
    const data = Object.assign({}, this.request.body, {
      resource: this.resource,
      userId: new ObjectId(this.request.identity.sub),
    });
    return this.db?.collection('favorites').insertOne(data);
  }

  async removeFavorites(): Promise<any> {
    return await this.db?.collection('favorites').deleteOne({
      targetId: (this.request.params as any).id,
      resource: this.resource,
      userId: new ObjectId(this.request.identity.sub),
    });
  }
}
