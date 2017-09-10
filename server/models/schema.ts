/**
 * Schema
 */
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLSchema
} from "graphql";
import { model } from "./db";
import { EventType } from "./EventType";
import { Future } from "ramda-fantasy";

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Query events",
  fields: () => ({
    events: {
      type: new GraphQLList(EventType),
      args: {
        id: { type: GraphQLString },
        eventNum: { type: GraphQLString },
        eventName: { type: GraphQLString },
        eventGits: { type: GraphQLString },
        eventFbLink: { type: GraphQLString },
        eventinfo: { type: GraphQLString },
        speakerNames: { type: GraphQLString },
        eventVideos: { type: GraphQLString },
        eventDate: { type: GraphQLString },
        eventSlides: { type: GraphQLString }
      },
      resolve: (root: undefined, args: {}) =>
        new Promise((resolve: any, reject: any) =>
          model.find(
            args,
            (err: any, events: any) => (err ? reject(err) : resolve(events))
          )
        )
    }
  })
});

export const Schema = new GraphQLSchema({
  query: Query
});
