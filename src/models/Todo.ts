import { BaseModel } from "./BaseModel";

export class Todo extends BaseModel {
  text: string;
  completed: boolean;
  visible: boolean;

  constructor(text: string) {
    super();
    this.text = text;
    this.completed = false;
    this.visible = true;
  }
}

export default Todo;
