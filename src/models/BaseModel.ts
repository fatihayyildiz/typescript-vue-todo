export class BaseModel {
  constructor() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  createdAt: Date;
  updatedAt: Date;
}

export default BaseModel;
