import { StatusCodes } from 'http-status-codes';
import { BaseUserException } from './base-user.exception.js';

export class UserExistException extends BaseUserException {
  constructor() {
    super(StatusCodes.NOT_FOUND, 'User already exists', 'User with the email exists');
  }
}
