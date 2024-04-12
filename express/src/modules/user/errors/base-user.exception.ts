import { HttpException } from '../../../libs/rest/index.js';

export class BaseUserException extends HttpException {
  constructor(
    httpStatusCode: number,
    message: string,
    public readonly detail: string,
    public readonly type = 'USER_SERVICE'
  ) {
    super(httpStatusCode, message);
  }
}
