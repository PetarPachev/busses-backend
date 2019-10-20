import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { authenticate } from 'passport';
import { MongooseModule } from '@nestjs/mongoose';

// Strategies
import { LocalStrategy } from './passport/local.strategy';
import { JwtStrategy } from './passport/jwt.strategy';
import { FacebookStrategy } from './passport/facebook.strategy';
import { TwitterStrategy } from './passport/twitter.strategy';
import { GoogleStrategy } from './passport/google-plus.strategy';

import { authProviders } from './auth.providers';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { bodyValidatorMiddleware } from './middlewares/body-validator.middleware';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  providers: [
    ...authProviders,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    FacebookStrategy,
    TwitterStrategy,
    GoogleStrategy,
  ],
  controllers: [AuthController],
  exports: [
    MongooseModule
  ]
})
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        bodyValidatorMiddleware,
        authenticate('local-signup', { session: false }),
      )
      .forRoutes('api/auth/local/signup');

    consumer
      .apply(
        bodyValidatorMiddleware,
        authenticate('local-signin', { session: false }),
      )
      .forRoutes('api/auth/local/signin');

    consumer
      .apply(authenticate('facebook', { session: false }))
      .forRoutes('api/auth/facebook/token');

    consumer
      .apply(authenticate('twitter', { session: false }))
      .forRoutes('api/auth/twitter/token');

    consumer
      .apply(authenticate('google', { session: false }))
      .forRoutes('api/auth/google/token');
  }
}
