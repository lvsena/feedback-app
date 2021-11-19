import express, { Router } from "express";
import { HelloWorldController } from "../domain/controller/HelloWorldController";

const router = Router();
const helloWorldController = new HelloWorldController();

router.get("/", helloWorldController.get);

export default router;
