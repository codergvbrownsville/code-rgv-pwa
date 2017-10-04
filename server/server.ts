/**
 * Server file
 */
import * as express from "express";
import * as path from "path";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as GraphHTTP from "express-graphql";
import { isNil } from "ramda";
import { Schema } from "./models/schema";

const PORT = isNil(process.env.PORT) ? 3000 : process.env.PORT;

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("dist"));

app.use(
  "/codergv-graphql",
  GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
  })
);

app.listen(PORT, () => console.info(`Listening to port ${PORT}`));
