import { NextFunction, Request, Response } from 'express';

export interface ExceptionFilter {
  catch(error: Error, req: Request, res: Response, next:NextFunction): void;
}
