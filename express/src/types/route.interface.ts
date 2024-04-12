import { NextFunction, Request, Response } from 'express';

import { HttpMethod } from './http-method.type.js';
import { Middleware } from './middleware.interface.js';

export interface Route {
  path: string;
  method: HttpMethod;
  handler: (req: Request, res: Response, next: NextFunction) => void;
  middlewares?: Middleware[];
}
