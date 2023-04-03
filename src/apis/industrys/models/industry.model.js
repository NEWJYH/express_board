import { Model } from "objection";

export class Industry extends Model {
  static get tableName() {
    return "industry";
  }
}
