import { Get, Controller, Res, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index.ejs')
  root() {
    return { message: 'Hello world' };
  }
}
