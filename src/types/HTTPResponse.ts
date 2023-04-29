type HTTPResponse = {
  result: boolean,
  data?: Record<string, unknown>,
  error?: Error,
  message?: string
}

export function OK(data?: Record<string, unknown>, message?: string): HTTPResponse {
  return {
    result: true,
    data,
    message
  }
}

export function Error(error: Error): HTTPResponse {
  return {
    result: false,
    error,
    message: error.message
  }
}

export default HTTPResponse