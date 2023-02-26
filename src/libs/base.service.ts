import { FastifyReply, FastifyRequest } from 'fastify';

/**
 * BaseService class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export class BaseService {
  request: FastifyRequest;
  reply: FastifyReply;

  /**
   * BaseService Constructor
   * @param {FastifyRequest} request
   * @param {FastifyReply} reply
   */
  constructor(request: FastifyRequest, reply: FastifyReply) {
    this.request = request;
    this.reply = reply;
  }
}
