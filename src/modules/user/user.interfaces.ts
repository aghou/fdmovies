import { ObjectId } from 'mongodb';

/**
 * SignUp Interface
 */
export interface SignupInterface {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}

/**
 * SignIn Interface
 */
export interface SigninInterface {
  username: string;
  password: string;
}

/**
 * User Interface
 */
export interface UserInterface extends SignupInterface {
  _id: ObjectId;
  createdAt: Date;
}
