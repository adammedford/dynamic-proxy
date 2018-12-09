import { Module } from '@nestjs/common'
import { APP_CONTROLLERS } from './controllers'
import { APP_PROVIDERS } from './providers'

@Module({
  imports: [],
  controllers: [...APP_CONTROLLERS],
  providers: [...APP_PROVIDERS]
})
export class AppModule {}
