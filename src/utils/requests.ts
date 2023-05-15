import axios, { AxiosError } from 'axios'
import { NextRequest } from 'next/server'

type RequestResponse<T> = {
  data: T,
  error: AxiosError
}

export async function getRequest<T>(url: string): Promise<T | undefined> {
  try {
    const request = await axios.get<RequestResponse<T>>(url)
    const response: RequestResponse<T> = request.data

    return response.data
  } catch (error) {
    console.error('Error on GET request', {error})
    return undefined
  }
}

export async function postRequest<T>(url: string, payload: Record<string, unknown>): Promise<T | undefined> {
  try {
    const request = await axios.post<RequestResponse<T>>(url, payload)
    const response: RequestResponse<T> = request.data

    return response.data
  } catch (error) {
    console.error('Error on POST request', {error})
    return undefined
  }
}

export async function putRequest<T>(url: string, payload: Record<string, unknown>): Promise<T | undefined> {
  try {
    const request = await axios.put<RequestResponse<T>>(url, payload)
    const response: RequestResponse<T> = request.data

    return response.data
  } catch (error) {
    console.error('Error on PUT request', {error})
    return undefined
  }
}

export async function deleteRequest<T>(url: string, payload: Record<string, unknown>): Promise<T | undefined> {
  try {
    const request = await axios.delete<RequestResponse<T>>(url)
    const response: RequestResponse<T> = request.data

    return response.data
  } catch (error) {
    console.error('Error on DELETE request', {error})
    return undefined
  }
}

export function logRequestPayload(request: NextRequest) {

  const payload = JSON.parse(JSON.stringify({
    url: request.url,
    headers: request.headers,
    body: request.body,
  }))

  for (let key in payload.body) {
    switch (key) {
      case 'password':
        payload.body.password = "***"
        break
      default:
    }
  }

  return payload
}