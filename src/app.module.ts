import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [UsersModule, RecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
