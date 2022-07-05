import express from "express";
import * as callsController from "../controllers/callsController";

const callsRouter = express.Router();

callsRouter
  .route('/')
  .post(callsController.createCall);

callsRouter
  .route('/offset/:page')
  .get(callsController.getCalls);

callsRouter
  .route('/:id')
  .get(callsController.getCallById)
  // .put(callsController.updateCallById)
  // .delete(callsController.deleteCallById);

export default callsRouter;