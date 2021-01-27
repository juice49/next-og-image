import { IncomingMessage } from 'http'

interface ApiRequest extends IncomingMessage {
  query: {
    path: string[]
  }
}

export default ApiRequest
