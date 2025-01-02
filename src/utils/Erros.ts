export class ResponseError extends Error {
    constructor(message: string, public response: Response) {
      super(message);
    }
  }
  
export function mapError(error: unknown): string {
  if (error instanceof ResponseError) return error.response.statusText;
  if (error instanceof Error) return error.message;
  return "Erro desconhecido";
}
