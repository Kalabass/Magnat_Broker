import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
	constructor(private readonly redis: Redis) {}

	async set(key: string, value: string, expiration: number) {
		await this.redis.set(key, value, 'EX', expiration);
	}

	async get(key: string) {
		return await this.redis.get(key);
	}

	async del(key: string) {
		await this.redis.del(key);
	}
}
