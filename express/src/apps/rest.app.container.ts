import { Container } from 'inversify';

import { RestApplication } from './rest.app.js';
import { Component } from '../types/components.enum.js';

export function createRestAppContainer() {
  const container = new Container();

  container.bind<RestApplication>(Component.RestApplication)
    .to(RestApplication)
    .inSingletonScope();

  return container;
}
