import { api } from './api-client'

interface SendEmailRequest {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: SendEmailRequest) {
  await api.post('send', { json: data })
}
