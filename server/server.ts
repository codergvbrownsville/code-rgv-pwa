/**
 * Server file
 */
import * as express from "express";

const app = express();

app.use(express.static("dist"));

app.listen(3000, () =>
  // tslint:disable-next-line:no-console
  console.log("Listening on port 3000!")
);
