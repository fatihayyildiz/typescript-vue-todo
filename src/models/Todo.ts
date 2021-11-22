import { BaseModel } from "./BaseModel";

export class Todo extends BaseModel {
  id: number;
  text: string;
  completed: boolean;
  isActive: boolean;

  constructor(text: string) {
    super();
    this.id = 0;
    this.text = text;
    this.completed = false;
    this.isActive = true;
  }
}

export default Todo;
