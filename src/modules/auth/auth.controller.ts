import { Controller, Post, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IToken } from './interfaces/token.interface';
import { Request } from 'express';
import { IUser } from './interfaces/user.interface';
import { Roles } from '../../decorators/roles.decorator';
import { RolesEnum } from '../../enums/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../guards/roles.guard';

@Controller('api/Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('jwt/verify')
  async verifyJwt(@Req() req: Request): Promise<boolean> {
    return await this.authService.verifyToken(req.body);
  }

  @Post('local/signup')
  async requestJsonWebTokenAfterLocalSignUp(@Req()
  req: {
    user: IUser;
  }): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Post('local/signin')
  async requestJsonWebTokenAfterLocalSignIn(@Req()
  req: {
    user: IUser;
  }): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Get('facebook/uri')
  async requestFacebookRedirectUrl(): Promise<{ redirect_uri: string }> {
    return await this.authService.requestFacebookRedirectUri();
  }

  @Post('facebook/signin')
  async facebookSignIn(@Req() req: Request): Promise<IToken> {
    return await this.authService.facebookSignIn(req.body.code);
  }

  @Post('facebook/token')
  async requestJsonWebTokenAfterFacebookSignIn(@Req()
  req: {
    user: IUser;
  }): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Get('twitter/uri')
  async requestTwitterRedirectUri(): Promise<any> {
    return await this.authService.requestTwitterRedirectUri();
  }

  @Post('twitter/signin')
  async twitterSignIn(@Req() req: Request): Promise<any> {
    return await this.authService.twitterSignIn(
      req.body.oauth_token,
      req.body.oauth_verifier,
    );
  }

  @Post('twitter/token')
  async requestJsonWebTokenAfterTwitterSignIn(@Req()
  req: {
    user: IUser;
  }): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Get('google/uri')
  async requestGoogleRedirectUri(): Promise<any> {
    return await this.authService.requestGoogleRedirectUri();
  }

  @Post('google/signin')
  async googleSignIn(@Req() req: Request): Promise<any> {
    return await this.authService.googleSignIn(req.body.code);
  }

  @Post('google/token')
  async requestJsonWebTokenAfterGoogleSignIn(@Req()
  req: {
    user: IUser;
  }): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Get('users')
  @Roles(RolesEnum.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getUsers(): Promise<IUser[]> {
    return await this.authService.getUsers();
  }
}
