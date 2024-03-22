import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { TaskListsModule } from "./task-lists/task-lists.module";
import { TasksModule } from "./tasks/tasks.module";
import { Task } from "./models/tasks.model";
import { TaskList } from "./models/task-lists.model";
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASS,
      database: process.env.POSTGRES_NAME,
      models: [Task, TaskList],
      autoLoadModels: true,
    }),
    TaskListsModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
