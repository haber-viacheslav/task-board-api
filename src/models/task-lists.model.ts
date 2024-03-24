import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
interface ITaskListAttrs {
  listName: string;
}

@Table({ tableName: "task_list" })
export class TaskList extends Model<TaskList, ITaskListAttrs> {
  @ApiProperty({ example: 1, description: "unique ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;
  @ApiProperty({ example: "To Do", description: "unique name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  listName!: string;
}
