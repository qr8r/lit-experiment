import { fromRollup } from "@web/dev-server-rollup";
import litcss from 'web-dev-server-plugin-lit-css';

export default {
  open: true,
  nodeResolve: true,
  rootDir: "public",
  watch: true,

  mimeTypes: {
    "**/*.css": "js",
  },

  plugins: [
    litcss({
      include: "**/*.css",
    }),
  ],
};
