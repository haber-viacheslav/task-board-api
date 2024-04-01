import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { TaskHistoryService } from "../task-history/task-history.service";

@Injectable()
export class TaskMiddleware implements NestMiddleware {
  constructor(private readonly taskHistoryService: TaskHistoryService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.method === "POST") {
        await this.taskHistoryService.logTaskCreation(req.body);
      }

      if (req.method === "PUT") {
        const taskId = +req.params.id;
        const updatedFields = req.body;

        for (const [fieldName] of Object.entries(updatedFields)) {
          await this.taskHistoryService.logTaskUpdate(
            taskId,
            fieldName,
            "",
            updatedFields[fieldName],
          );
        }
      }

      if (req.method === "DELETE") {
        const taskId = +req.params.id;
        await this.taskHistoryService.logTaskDeletion(taskId, {});
      }
      next();
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
