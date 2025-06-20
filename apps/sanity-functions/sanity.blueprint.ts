import { defineBlueprint, defineDocumentFunction } from "@sanity/blueprints";

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: "test-function",
      event: {
        on: ["publish"],
        filter: '_type == "post"',
        projection: "_id, content",
      },
    }),
  ],
});
