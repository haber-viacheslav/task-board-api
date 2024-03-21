import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ITasksAttrs {
  name: string;
  status: string;
  priority: string;
  description: string;
  dueDate: Date;
}

@Table({ tableName: "tasks" })
export class Task extends Model<Task, ITasksAttrs> {
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
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  priority!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dueDate!: Date;
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string;
}
