import 'reflect-metadata';
import { Container } from 'inversify';

import { RestApplication } from './apps/rest.app.js';
import { Component } from './types/components.enum.js';
import { createRestAppContainer } from './apps/rest.app.container.js';
import { createUserContainer } from './modules/user/index.js';

async function bootstrap() {
  const appContainer = Container.merge(
    createRestAppContainer(),
    createUserContainer(),
  );

  const application = appContainer.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();
