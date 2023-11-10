import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);
  // se usa para haacer una validacion global de los dto sin necesidad de repetir codigo
  app.useGlobalPipes(
    new ValidationPipe({
      // con esta propiedad se evita tener informacion basura por ejemplo en los post que se envie informacion inecesaria
      whitelist: true,
      // con esta propiedad se le indica al usuario que la informacion que no ha sido validada por el dto es incorrecta y envia un status 400
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
main();
