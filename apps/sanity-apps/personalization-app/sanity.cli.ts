import { defineCliConfig } from "sanity/cli";
import { resolve } from "path";

export default defineCliConfig({
  app: {
    organizationId: "ojWrGVxCd",
    entry: "./src/App.tsx",
  },
  vite: (config: any) => ({
    ...config,
    server: {
      ...config.server,
      fs: {
        strict: false,
        allow: [
          // Allow access to the current directory
          resolve(__dirname),
          // Allow access to the workspace root
          resolve(__dirname, "../../../"),
          // Allow access to node_modules
          resolve(__dirname, "../../../node_modules"),
        ],
      },
      cors: true,
    },
    define: {
      ...config.define,
      global: "globalThis",
    },
  }),
});
