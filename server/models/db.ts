/**
 * Codergv database
 */
import * as mongoose from "mongoose";
import { schema } from "./eventsSchema";

const uri = "mongodb://localhost:27017/codergv";

mongoose.connect(uri, { useMongoClient: true });

mongoose.connection
  .once("open", () => console.info("+++Connected to mongodb"))
  .on("error", () => console.error("---FAILED connection to mongodb"));

export const model = mongoose.model("Event", schema, "events");
