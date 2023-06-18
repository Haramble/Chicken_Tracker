import { Module } from "@nestjs/common";
import { GenshineController } from "./genshine.controller";

@Module({
    imports: [],
    controllers: [ GenshineController ],
    providers: [],
})
export class GenshineModule {}
