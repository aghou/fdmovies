/**
 * UserExistsException class
 */
export class UserExistsException extends Error {
  constructor(message = 'User already exists') {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * UserPasswordException class
 */
export class UserPasswordException extends Error {
  constructor(message = 'Username and password do not match') {
    super(message);
    this.name = this.constructor.name;
  }
}
