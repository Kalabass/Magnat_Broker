import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const configService = app.get(ConfigService);

	app.enableCors({
		origin: configService.get('CLIENT_URL'),
		methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
		credentials: true,
	});

	app.use(cookieParser());

	await app.listen(configService.get('PORT') || 8080);
}

bootstrap();
