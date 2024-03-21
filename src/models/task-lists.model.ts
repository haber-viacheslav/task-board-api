import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ITaskListAttrs {
  listName: string;
}

@Table({ tableName: "taskList" })
export class TaskList extends Model<TaskList, ITaskListAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  listName!: string;
}
