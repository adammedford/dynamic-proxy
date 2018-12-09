import { Injectable } from '@nestjs/common'
import * as express from 'express'

@Injectable()
export class FrameworkService {
  static instance: express.Express

  applyProxy(proxy: any) {
    return FrameworkService.instance.use(proxy)
  }
}
