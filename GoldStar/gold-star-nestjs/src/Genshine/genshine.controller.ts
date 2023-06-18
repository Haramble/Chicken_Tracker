import { Controller, Get, Param, Query } from "@nestjs/common";

@Controller("genshine")
export class GenshineController {

    @Get()
    getTesturl(@Query('count') count: Int16Array): string {
        console.log('genshineURL!!!!!!! ' + count)
        return "testurl!! " + count;
    }
}
