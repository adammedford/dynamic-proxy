import { Injectable } from '@nestjs/common'
import proxy from 'http-proxy-middleware'

@Injectable()
export class ProxyService {
  proxy(options: proxy.Config) {
    return proxy(options)
  }
}
