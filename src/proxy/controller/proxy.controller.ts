import { ProxyService } from './../service/proxy.service'
import { FrameworkService } from './../../framework/service/framework.service'
import {
  Get,
  Post,
  Controller,
  Body,
  Delete,
  Param,
  HttpException,
  HttpStatus
} from '@nestjs/common'
import * as proxy from 'http-proxy-middleware'

@Controller('test')
export class ProxyController {
  constructor(
    private readonly framework: FrameworkService,
    private readonly proxyService: ProxyService
  ) {}

  @Post()
  async add(@Body() options: proxy.Config) {
    try {
      return this.framework.applyProxy(this.proxyService.proxy(options))
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }
}
