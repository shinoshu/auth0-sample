import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { Auth0Service } from './auth0.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [ConfigModule.forRoot(), PassportModule],
  controllers: [AppController],
  providers: [Auth0Service, JwtStrategy],
})
export class AppModule {}
