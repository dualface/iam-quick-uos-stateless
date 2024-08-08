export interface UosResponse {
  [keyof: string]: unknown;
}

export interface UosResponseError {
  code: string;
  message: string;
}

export interface UosResult {
  ok: boolean;
  error?: string;
}
