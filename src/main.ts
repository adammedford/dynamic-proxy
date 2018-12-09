import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { FrameworkService } from './framework'
import express from 'express'

async function bootstrap() {
  const server = express()
  FrameworkService.instance = server
  const app = await NestFactory.create(AppModule, server)
  await app.listen(3000)
}
bootstrap()
