/**
 * Graphql Events type
 */
import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

export const EventType = new GraphQLObjectType({
  name: "Events",
  description: "Events collection",
  fields: () => ({
    id: { type: GraphQLString },
    eventNum: { type: GraphQLString },
    eventName: { type: GraphQLString },
    eventGits: { type: GraphQLString },
    eventFbLink: { type: GraphQLString },
    eventinfo: { type: GraphQLString },
    speakerNames: { type: new GraphQLList(GraphQLString) }
  })
});
