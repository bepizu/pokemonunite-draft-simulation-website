export type HTTPOkResponse<T> = {
  result: boolean,
  data?: T,
  message?: string
}

export type HTTPErrorResponse = {
  result: boolean,
  error?: Error,
  message?: string
}

export function OKResponse<T>(data?: T, message?: string): HTTPOkResponse<T> {
  return {
    result: true,
    data,
    message
  }
}

export function ErrorResponse<T>(error: Error): HTTPErrorResponse {
  return {
    result: false,
    error,
    message: error.message
  }
}