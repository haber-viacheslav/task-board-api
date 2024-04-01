import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { TaskListsModule } from "./task-lists/task-lists.module";
import { TasksModule } from "./tasks/tasks.module";
import { TaskHistoryModule } from "./task-history/task-history.module";
import { Task } from "./models/tasks.model";
import { TaskList } from "./models/task-lists.model";
import { TaskHistory } from "./models/task-history.model";
import { TaskMiddleware } from "./middleware/task-history.middleware";
import { TasksController } from "./tasks/tasks.controller";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Task, TaskList, TaskHistory],
      autoLoadModels: true,
    }),
    TaskListsModule,
    TasksModule,
    TaskHistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TaskMiddleware).forRoutes(TasksController);
  }
}
