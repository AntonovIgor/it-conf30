export class HttpException extends Error {
  constructor(
    public readonly httpStatusCode: number,
    message: string,
  ) {
    super(message);
  }
}
