import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';

(async () => {
    const app = await NestFactory.createApplicationContext(AppModule, {
        logger: false
    });
    app
        .select(CommandModule)
        .get(CommandService)
        .exec();
})();

function AppModule(AppModule: any, arg1: { logger: false; }) {
    throw new Error('Function not implemented.');
}
