import express from 'express';
import dotenv from 'dotenv';
import {connect} from "mongoose";
import cors from 'cors';
dotenv.config({path: '.env'});

import router from "./routes/index";

const app: express.Express = express();

app.use(cors({origin: true}));

app.use(express.json({limit: '7mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.static("static"));
app.use("/", router);

const connection = String(process.env.MONGO_URI);


app.listen(process.env.PORT, function () {
  console.log(`backend at ${new Date} [app.ts]: server listening on port: ${process.env.PORT} and ${process.env.NODE_ENV}`);

  connect(connection).then(() => {
    console.log("MongoDb connected");
  });
});
export default app;
