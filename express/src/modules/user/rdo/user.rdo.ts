import { Expose } from 'class-transformer';

export class LoggedUserRdo {
  @Expose()
  public email: string;

  @Expose()
  public firstname: string;
}
