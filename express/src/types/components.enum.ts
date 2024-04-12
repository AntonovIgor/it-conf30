export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  UserController: Symbol.for('UserController'),
  UserFactory: Symbol.for('UserFactory'),
  UserRepository: Symbol.for('UserRepository'),
  UserService: Symbol.for('UserService'),
  UserExceptionFilter: Symbol.for('UserExceptionFilter'),
} as const;
