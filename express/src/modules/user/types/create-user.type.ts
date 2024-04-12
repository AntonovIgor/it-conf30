import { Request } from 'express';

import { RequestParams } from '../../../types/request-params.type.js';
import { RequestBody } from '../../../types/request-body.type.js';
import { CreateUserDto } from '../dto/create-user.dto.js';

export type CreateUserRequest = Request<RequestParams, RequestBody, CreateUserDto>;
