import { Module } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisService } from './redis.service';

@Module({
	providers: [
		{
			provide: Redis,
			useFactory: () => {
				return new Redis({
					host: 'localhost',
					port: 6379,
				});
			},
		},
		RedisService,
	],
	exports: [RedisService],
})
export class RedisModule {}
