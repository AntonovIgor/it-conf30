import express, { Express, json } from 'express';
import { inject, injectable } from 'inversify';

import { DEFAULT_PORT, Route } from './rest.app.constant.js';
import { Component } from '../types/components.enum.js';
import { Controller } from '../libs/rest/index.js';
import { ExceptionFilter } from '../types/exception-filter.interface.js';

@injectable()
export class RestApplication {
  private readonly server: Express;

  constructor(
    @inject(Component.UserController) private readonly userController: Controller,
    @inject(Component.UserExceptionFilter) private readonly userExceptionFilter: ExceptionFilter,
  ) {
    this.server = express();
  }

  private async initControllers() {
    this.server.use(Route.Users, this.userController.router)
  }

  private async initGlobalMiddleware() {
    this.server.use(json());
  }

  private async initExceptionFilters() {
    this.server.use(this.userExceptionFilter.catch.bind(this.userExceptionFilter));
  }

  private async initServer() {
    const port = process.env.PORT || DEFAULT_PORT;
    this.server.listen(port)

    console.log(`🚀 Application is running on: http://localhost:${port}/`);
  }

  public async init() {
    await this.initGlobalMiddleware();
    await this.initControllers();
    await this.initExceptionFilters();
    await this.initServer();
  }
}
