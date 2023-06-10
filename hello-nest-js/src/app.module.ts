import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesturlModule } from './testurl/testurl.module';

@Module({
  imports: [TesturlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
