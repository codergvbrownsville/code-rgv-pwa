/**
 * Offline plugin configuration
 */

import * as OfflinePlugin from "offline-plugin";

export const offLineConfig = () =>
  new OfflinePlugin({
    version: "[hash]",
    responseStrategy: "cache-first",
    safeToUseOptionalCaches: true,
    caches: {
      main: ["index.html", "*.bundle.js"],
      // additional: ["*.bundle.js", "*.worker.js", ":externals:"],
      additional: [":externals:"],
      optional: [":rest:"]
    },
    cacheMaps: [
      {
        match: /.*/,
        to: "/",
        requestTypes: ["navigate"]
      }
    ],
    ServiceWorker: {
      events: true
    },
    AppCache: {
      FALLBACK: { "/": "/" }
    }
    // externals: [] Content files
  });
