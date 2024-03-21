import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getTasks() {
    return [{ title: "Hello World!", id: 1, description: "new task" }];
  }
}
