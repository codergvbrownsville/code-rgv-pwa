/**
 * Server file
 */
import * as express from "express";
import * as path from "path";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as GraphHTTP from "express-graphql";

const PORT = 3000;
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());

app.use(express.static("dist"));

app.listen(3000, () =>
  // tslint:disable-next-line:no-console
  console.log("Listening on port 3000!")
);
