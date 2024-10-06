import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomUnauthorizedException extends HttpException {
	constructor(
		message: string,
		public code: string
	) {
		super({ message, code }, HttpStatus.UNAUTHORIZED);
	}
}
