/**
 * Mongoose schema for events
 */
import * as mongoose from "mongoose";

export const eventsSchema = {
  eventNum: { type: String, required: true },
  eventName: { type: String, required: true },
  eventGits: { type: String, required: false },
  eventFbLink: { type: String, required: false },
  eventinfo: { type: String, required: false },
  speakerNames: { type: [String] },
  eventVideos: { type: String },
  eventDate: { type: String },
  eventSlides: { type: String }
};

export const schema = new mongoose.Schema(eventsSchema)
  .set("toObject", { virtuals: true })
  .set("toJSON", { virtuals: true });
