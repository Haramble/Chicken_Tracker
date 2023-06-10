import { Controller, Get, Param, Query } from "@nestjs/common";

@Controller("testurl")
export class TesturlController {

    @Get()
    getTesturl(@Query('count') count: Int16Array): string {
        console.log('testURL!!!!!!! ' + count)
        return "testurl!! " + count;
    }
}
