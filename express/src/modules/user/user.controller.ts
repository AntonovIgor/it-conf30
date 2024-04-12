import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';

import { BaseController } from '../../libs/rest/index.js';
import { CreateUserRequest } from './types/create-user.type.js';
import { ParamUserID } from './types/param-userid.type.js';
import { Component } from '../../types/components.enum.js';
import { UserService } from './user.service.js';


@injectable()
export class UserController extends BaseController {
  constructor(
    @inject(Component.UserService) private readonly userService: UserService,
  ) {
    super();

    this.addRoute({ path: '/register', method: 'post', handler: this.create })
    this.addRoute({ path: '/:userId', method: 'get', handler: this.show });
  }

  public async create({ body }: CreateUserRequest, res: Response): Promise<void> {
    const user = await this.userService.register(body);
    this.ok(res, user.toPOJO());
  }

  public async show({ params }: Request<ParamUserID>, res: Response): Promise<void> {
    const user = await this.userService.show(params.userId);
    this.ok(res, user.toPOJO());
  }
}
