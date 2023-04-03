import express from "express";
import { IndustryService } from "./industry.service.js";
import { IndustryController } from "./industry.controller.js";

export class IndustryRouter {
  constructor() {
    this.router = express.Router();
    this.industryService = new IndustryService();
    this.industryController = new IndustryController(this.industryService);

    this.setRoutes();
  }

  setRoutes() {
    this.router.get("/industry/:id", this.industryController.findOne);
    this.router.post("/industry", this.industryController.createIndustry);
  }

  get getRouter() {
    return this.router;
  }
}
