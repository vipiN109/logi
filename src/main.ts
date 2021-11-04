import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe());
  const options =new DocumentBuilder()
  .setTitle('learning')
  .setDescription('learning')
  .setVersion('1.0')
  .addTag('learning')
  .addBearerAuth()
  .build()

  const document=SwaggerModule.createDocument(app,options)
  SwaggerModule.setup('api/docs',app,document)
  await app.listen(4000);
}
bootstrap();
