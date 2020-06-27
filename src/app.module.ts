import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { GraphQLModule } from '@nestjs/graphql';



@Module({
  imports: [MongooseModule.forRoot(config.mongoURI),CarsModule, GraphQLModule.forRoot({autoSchemaFile: 'schema.gql'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
