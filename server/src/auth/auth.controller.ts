import { Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}
	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() req, @Res() res: Response) {
		return this.authService.login(req.user, res);
	}

	@Post('refreshTokens')
	async refreshTokens(@Request() req, @Res() res: Response) {
		return this.authService.refreshTokens(req.cookies['refresh_token'], res);
	}
}
