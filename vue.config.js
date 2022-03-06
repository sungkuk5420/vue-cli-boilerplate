// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   client:{
//     overlay:false
//   }
// });


module.exports = {
  devServer: {
    client: {
      overlay: false
    }
  }
}