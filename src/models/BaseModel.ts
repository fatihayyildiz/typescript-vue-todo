export class BaseModel {
  constructor() {
    this.createDateTime = new Date();
    this.lastChangedDateTime = new Date();
  }

  createDateTime: Date;
  lastChangedDateTime: Date;
}

export default BaseModel;
