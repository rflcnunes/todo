const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/sass/_variables.scss";
          @import "@/styles/sass/_mixins.scss";
        `,
      },
    },
  },
};
