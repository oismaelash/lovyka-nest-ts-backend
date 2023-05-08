import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  const configDoc = basicAuth({
    challenge: true,
    users: {
      [process.env.USER_DOCS]: process.env.PASS_DOCS,
    },
  });

  app.use(['/documentation', '/documentation-json'], configDoc);

  const config = new DocumentBuilder()
    .setTitle('Documentation API')
    .setDescription('Documentation about the API')
    .setVersion('1.0.0')
    // .addBearerAuth()
    .build();

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'API Services',
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document, customOptions);

  await app.listen(process.env.PORT || 3001);
}

bootstrap();
