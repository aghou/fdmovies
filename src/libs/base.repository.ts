import { FastifyReply, FastifyRequest } from 'fastify';
import { Db } from 'mongodb';

/**
 * BaseRepository class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export class BaseRepository {
  request: FastifyRequest;
  reply: FastifyReply;
  db: Db | undefined;

  /**
   * BaseRepository Constructor
   * @param {FastifyRequest} request
   * @param {FastifyReply} reply
   */
  constructor(request: FastifyRequest, reply: FastifyReply) {
    this.request = request;
    this.reply = reply;
    this.db = request.server.mongo.db;
  }
}
