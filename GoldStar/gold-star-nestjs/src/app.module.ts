import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenshineModule } from './Genshine/genshine.module';

@Module({
  imports: [GenshineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
