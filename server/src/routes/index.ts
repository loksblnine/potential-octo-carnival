import express from "express";

import callsRouter from "./callsRouter";

const router: express.Router = express.Router();

router.use("/calls", callsRouter);

export default router;