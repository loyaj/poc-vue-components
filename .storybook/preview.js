import { setup } from "@storybook/vue3";
import { Quasar } from "quasar";

import "../public/design-tokens.css";
import "@/styles/styles.scss";
import "quasar/src/css/index.sass";

setup(app => {
  app.use(Quasar, {});
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i
      }
    }
  }
};

export default preview;
