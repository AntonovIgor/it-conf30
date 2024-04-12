import { injectable } from 'inversify';
import { NextFunction, Request, Response } from 'express';

import { ExceptionFilter } from '../../types/exception-filter.interface.js';
import { BaseUserException } from './errors/base-user.exception.js';

@injectable()
export class UserExceptionFilter implements ExceptionFilter {
  public catch(error: unknown, _req: Request, res: Response, next: NextFunction): void {
    if (! (error instanceof BaseUserException)) {
      return next(error);
    }

    res
      .status(error.httpStatusCode)
      .json({ type: error.type, detail: error.detail, message: error.message });
  }
}
