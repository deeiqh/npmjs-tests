import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { redisStore } from 'cache-manager-redis-store';
import { CommonModule } from 'otp-guards';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    CommonModule.forRoot({
      otpMinutesToExpire: 0.523,
      cacheConfig: { store: redisStore },
      kafkaConfig: {
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'client',
            brokers: ['inspiron:9092'],
          },
          consumer: {
            groupId: 'test-group',
          },
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
