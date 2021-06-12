import { IncomingMessage } from 'http'
import Props from '../types/props'

interface ApiRequest extends IncomingMessage {
  query: {
    path: string[]
  } & Props
}

export default ApiRequest
