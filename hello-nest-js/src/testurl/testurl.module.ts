import { Module } from "@nestjs/common";
import { TesturlController } from "./testurl.controller";

@Module({
    imports: [],
    controllers: [ TesturlController ],
    providers: [],
})
export class TesturlModule {}