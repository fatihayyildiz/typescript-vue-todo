import { BaseModel } from "./BaseModel";

export class Task extends BaseModel {
  text: string;
  completed: boolean;

  constructor(text: string) {
    super();
    this.text = text;
    this.completed = false;
  }
}

export default Task;
