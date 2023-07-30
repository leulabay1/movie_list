import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UpComingModule } from './up-coming/up-coming.module';
import { PopularModule } from './popular/popular.module';
import { TrendingModule } from './trending/trending/trending.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://leul1:1nE5YenZ4d3CEzoa@cluster0.hslqx7t.mongodb.net/movie?retryWrites=true&w=majority",{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
    }),
    UserModule,
    AuthModule,
    UpComingModule,
    PopularModule,
    TrendingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
