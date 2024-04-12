import { ParamsDictionary } from 'express-serve-static-core';

export type ParamUserID = {
  userId: string;
} | ParamsDictionary;
